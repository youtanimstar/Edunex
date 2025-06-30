const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

const pool = require("../config/db").pool;

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        // Check if user exists
        const [existingUsers] = await pool.promise().query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );
        if (existingUsers.length > 0) {
            return res
                .status(400)
                .json({ success: false, message: "Email already exists" });
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const trimmedEmail = email.trim();
        const usernameFromEmail = trimmedEmail.split("@")[0];

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Insert user with OTP
        const [result] = await pool.promise().query(
            "INSERT INTO users (name, email, password, username, otp) VALUES (?, ?, ?, ?, ?)",
            [name, email, hashedPassword, usernameFromEmail, otp]
        );

        // Send OTP via Gmail
        dotenv.config();
        // Make sure to use an App Password if 2FA is enabled on your Google account
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS, // Use App Password here, not your regular Gmail password
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Your Signup OTP Code",
            text: `Your OTP code for signup is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            message: "User registered successfully. OTP sent to email for verification.",
            userId: result.insertId,
        });
    } catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Server error", error: error.message });
    }
};


const loginWithOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        // Check if user exists
        const [users] = await pool.promise().query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );
        if (users.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Save OTP to database
        await pool.promise().query(
            "UPDATE users SET otp = ? WHERE email = ?",
            [otp, email]
        );

        // Send OTP via Gmail
        dotenv.config();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP code is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "OTP sent to email" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ success: false, message: "Email and OTP are required" });
        }

        // Check if OTP matches
        const [users] = await pool.promise().query(
            "SELECT * FROM users WHERE email = ? AND otp = ?",
            [email, otp]
        );
        if (users.length === 0) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        // Clear OTP after successful verification
        await pool.promise().query(
            "UPDATE users SET otp = NULL WHERE email = ?",
            [email]
        );

        // Generate JWT token
        const token = jwt.sign(
            { id: users[0].id, email: users[0].email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        res.status(200).json({
            success: true,
            message: "OTP verified successfully",
            token,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};


const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({ success: false, message: "Username is required" });
        }

        const [users] = await pool.promise().query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        if (users.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user: users[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

module.exports = {
  signup,
  loginWithOtp,
  verifyOtp,
  getUserByUsername
};
