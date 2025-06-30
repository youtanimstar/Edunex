import React from 'react'

const CourseSection = () => {
return (
    <main className="relative overflow-hidden *:py-16 sm:py-24 mt-2">
            
            <div className="glow-bg top-0 -left-1/4 w-1/2 h-1/2 bg-sky-600 animate-pulse"></div>
            <div
                className="glow-bg bottom-0 -right-1/4 w-2/3 h-2/3 bg-fuchsia-600 animate-pulse"
                style={{ animationDelay: "2s" }}
            ></div>

            <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                            
                            
                            <div className="lg:w-2/3">
                                 
                                    <div className="aspect-video bg-black rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-sky-500/10">
                                             <video controls className="w-full h-full" poster="https://placehold.co/1920x1080/030712/0ea5e9?text=AI+Mastery" src="https://cdn.pixabay.com/video/2020/04/07/35264-407130725_large.mp4">
                                                    Your browser does not support the video tag.
                                            </video>
                                    </div>

                                    
                                    <div className="mt-8">
                                            <h1 className="text-3xl md:text-4xl font-bold text-white">AI Mastery: From Zero to Hero</h1>
                                            <p className="mt-4 text-gray-300">
                                                    This comprehensive course is your ultimate guide to mastering Artificial Intelligence and Machine Learning. We'll start with the foundational principles of AI, exploring its history and ethical considerations. Then, we dive deep into core concepts like neural networks, deep learning, and natural language processing (NLP). Through a series of hands-on projects, you will build real-world applications, from predictive models to image recognition systems. By the end of this course, you'll have a robust portfolio and the skills needed to tackle complex AI challenges in the industry.
                                            </p>
                                    </div>
                            </div>

                            
                            <div className="lg:w-1/3">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl h-full flex flex-col">
                                            <div className="p-4 border-b border-gray-700">
                                                    <h2 className="text-xl font-bold text-white">Course Content</h2>
                                            </div>
                                            <div className="lecture-list-container flex-grow overflow-y-auto p-2">
                                                    
                                                    <div className="lecture-item active border-l-4 cursor-pointer p-4 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                    <svg className="w-6 h-6 text-sky-400 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                                                    <div>
                                                                            <p className="font-semibold text-white">1. Introduction to AI</p>
                                                                            <p className="text-xs text-gray-400">12:35</p>
                                                                    </div>
                                                            </div>
                                                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                    </div>
                                                    
                                                    <div className="lecture-item border-l-4 border-transparent cursor-pointer p-4 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                    <svg className="w-6 h-6 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                                                    <div>
                                                                            <p className="font-semibold text-white">2. Neural Networks Explained</p>
                                                                            <p className="text-xs text-gray-400">25:10</p>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    
                                                     <div className="lecture-item border-l-4 border-transparent cursor-pointer p-4 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                    <svg className="w-6 h-6 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                                                    <div>
                                                                            <p className="font-semibold text-white">3. Deep Learning Fundamentals</p>
                                                                            <p className="text-xs text-gray-400">32:45</p>
                                                                    </div>
                                                            </div>
                                                    </div>

                                                     <div className="lecture-item border-l-4 border-transparent cursor-pointer p-4 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                    <svg className="w-6 h-6 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                                                    <div>
                                                                            <p className="font-semibold text-white">4. Project: Image Classifier</p>
                                                                            <p className="text-xs text-gray-400">45:18</p>
                                                                    </div>
                                                            </div>
                                                    </div>

                                                     <div className="lecture-item border-l-4 border-transparent cursor-pointer p-4 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                    <svg className="w-6 h-6 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                                                    <div>
                                                                            <p className="font-semibold text-white">5. Natural Language Processing</p>
                                                                            <p className="text-xs text-gray-400">28:02</p>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    
                                                    
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div>
    </main>
)
}

export default CourseSection