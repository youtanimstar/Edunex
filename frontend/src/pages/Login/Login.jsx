import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="auth-container">
        <div className="glow-bg -top-1/4 -left-1/4 w-1/2 h-1/2 bg-sky-500 animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="glow-bg -bottom-1/4 -right-1/4 w-2/3 h-2/3 bg-indigo-500 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        <div className="auth-form-wrapper">
            
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Welcome Back
                </h1>
                <p className="text-gray-400 mb-8">
                    Log in to continue your journey.
                </p>
            </div>

            
            <form>
                
                <div className="input-field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-box"
                        required
                    />
                </div>
                
                
                <div className="input-field">
                     <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-box"
                        required
                    />
                </div>
                
                
                <div className="text-right mb-6">
                    <a href="#" className="text-sm text-sky-400 hover:text-sky-300 transition">Forgot Password?</a>
                </div>

                
                <button type="submit" className="btn-primary">
                     Login
                </button>
            </form>

            
            <p className="text-center text-gray-400 mt-6">
                Don't have an account? 
                <Link to="/signup" className="font-semibold text-sky-500 hover:text-sky-400">
                     Sign up
                </Link>
            </p>
        </div>
    </div>
    </>
  )
}

export default Login