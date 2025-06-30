import React from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import heroVideo from "../../assets/hero_video.mp4";

const Home = () => {
  // Typewriter effect logic
  React.useEffect(() => {
    const words = ["Education.", "Technology.", "Innovation."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriter = document.querySelector(".typewriter-text");
    const cursor = document.querySelector(".cursor");

    function type() {
      if (!typewriter) return;
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriter.textContent = currentWord.substring(0, charIndex--);
      } else {
        typewriter.textContent = currentWord.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 400);
      } else {
        setTimeout(type, isDeleting ? 60 : 120);
      }
    }

    type();

    // Optional: blinking cursor effect
    let blink = true;
    const blinkInterval = setInterval(() => {
      if (cursor) cursor.style.opacity = blink ? "1" : "0";
      blink = !blink;
    }, 500);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

return (
    <>
        <section className="min-h-screen flex items-center justify-center text-center pt-20 relative overflow-hidden">
            {/* Video with reduced brightness */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Gradient overlay at bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0a0a1a]/100 to-transparent z-0"></div>
            <div className=" relative container mx-auto px-6 z-2">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 flex justify-center items-center text-white flex-col gap-8">
                    Welcome to the Future of
                    <div>
                        <span
                            className="typewriter-text "
                            data-text="Education.,Technology.,Innovation."
                        ></span>
                        <span className="cursor neon-text">|</span>
                    </div>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 mt-10">
                    Edunex offers cutting-edge courses in technology and design,
                    empowering you to shape the future.
                </p>
                <div>
                    <a
                        href="#courses"
                        className="px-8 py-3 rounded-lg font-semibold neon-button text-lg"
                    >
                        Explore Courses
                    </a>
                </div>
            </div>
        </section>

        <section id="courses" className="py-20">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Featured Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-card rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                        <div className="text-5xl mb-4 text-cyan-400">&#128187;</div>
                        <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                        <p className="text-gray-400 mb-4">
                            Master front-end and back-end technologies to build modern web
                            applications.
                        </p>
                        <a
                            href="#"
                            className="font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                            Learn More &rarr;
                        </a>
                    </div>

                    <div className="glass-card rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                        <div className="text-5xl mb-4 text-cyan-400">&#129302;</div>
                        <h3 className="text-2xl font-bold mb-2">AI & Machine Learning</h3>
                        <p className="text-gray-400 mb-4">
                            Dive into the world of artificial intelligence and build
                            intelligent systems.
                        </p>
                        <a
                            href="#"
                            className="font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                            Learn More &rarr;
                        </a>
                    </div>

                    <div className="glass-card rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                        <div className="text-5xl mb-4 text-cyan-400">&#128225;</div>
                        <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
                        <p className="text-gray-400 mb-4">
                            Create beautiful and intuitive user interfaces that users will
                            love.
                        </p>
                        <a
                            href="#"
                            className="font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                            Learn More &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-20">
            <div className="container mx-auto px-6  max-w-[1200px]">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4">About Deep Das</h2>
                        <p className="text-gray-300 mb-4">
                            Hello! I'm Deep Das, a passionate software developer with a
                            strong background in building modern web applications and
                            scalable solutions. I thrive on solving complex problems and am
                            always eager to learn new technologies.
                        </p>
                        <p className="text-gray-300 mb-4">
                            This is my One of the Best projects, Edunex, where I aim to
                            provide high-quality education in technology and design. My goal
                            is to empower learners with the skills they need to succeed in
                            the ever-evolving tech landscape.
                        </p>
                        <p className="text-gray-300">
                            As a lifelong learner, I am committed to continuous growth and
                            innovation in the tech industry. I believe in the power of
                            technology to transform lives and am dedicated to making a
                            positive impact through my work.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://deepdas-portfolio.netlify.app/youtanimstar3.jpg"
                            alt="Deep Das"
                            className="rounded-lg shadow-lg"
                            onError="this.onerror=null;this.src='https://placehold.co/600x400/0a0a1a/ffffff?text=Image+Not+Found';"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="py-20 bg-[#0a0a1a] text-white">
            <div className="container mx-auto px-6 max-w-[1000px]">
                <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left side: Info + Map */}
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <div className="glass-card rounded-lg p-8 flex flex-col gap-8 justify-center shadow-lg">
                            <div className="flex items-center gap-4">
                                <span className="text-cyan-400 text-3xl">&#9993;</span>
                                <div>
                                    <div className="font-semibold">Email</div>
                                    <a href="mailto:contact@edunex.com" className="text-gray-300 hover:text-cyan-300 transition">
                                        contact@edunex.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-cyan-400 text-3xl">&#128205;</span>
                                <div>
                                    <div className="font-semibold">Location</div>
                                    <span className="text-gray-300">Kolkata, West Bengal, India</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-cyan-400 text-3xl">&#128222;</span>
                                <div>
                                    <div className="font-semibold">Phone</div>
                                    <a href="tel:+919876543210" className="text-gray-300 hover:text-cyan-300 transition">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg glass-card">
                            <iframe
                                title="Edunex Location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=88.3639%2C22.5726%2C88.3639%2C22.5726&amp;layer=mapnik&amp;marker=22.5726%2C88.3639"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    {/* Right side: Contact Form */}
                    <form className="md:w-1/2 glass-card rounded-lg p-8 flex flex-col gap-6 shadow-lg">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 rounded bg-[#181830] text-white border border-[var(--border-color)] focus:outline-none focus:border-cyan-400"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 rounded bg-[#181830] text-white border border-[var(--border-color)] focus:outline-none focus:border-cyan-400"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 font-semibold ">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded bg-[#181830] text-white border border-[var(--border-color)] focus:outline-none focus:border-cyan-400 h-[117px]"
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="neon-button px-6 py-3 rounded-lg font-semibold text-lg mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </>
);
};

export default Home;
