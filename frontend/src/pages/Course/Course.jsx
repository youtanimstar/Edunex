import React from 'react'
import { Link } from 'react-router-dom';

const Course = () => {
// Course data array
const courses = [
    {
        title: "AI Mastery: From Zero to Hero",
        img: "https://placehold.co/600x400/030712/0ea5e9?text=AI+Mastery",
        video: "https://cdn.pixabay.com/video/2020/04/07/35264-407130725_large.mp4",
        tag: "Pro",
        tagType: "pro",
        description: "Unlock the power of Artificial Intelligence with our comprehensive project-based course.",
    },
    {
        title: "The Web Developer Bootcamp",
        img: "https://placehold.co/600x400/030712/22c55e?text=Web+Dev",
        video: "https://cdn.pixabay.com/video/2025/04/29/275633_large.mp4",
        tag: "Free",
        tagType: "free",
        description: "Learn HTML, CSS, JavaScript, Node.js, and more in this introductory web development course.",
    },
    {
        title: "Data Science & Machine Learning",
        img: "https://placehold.co/600x400/030712/f97316?text=Data+Science",
        video: "https://cdn.pixabay.com/video/2024/02/16/200789-913417711_large.mp4",
        tag: "Pro",
        tagType: "pro",
        description: "Master Python, Pandas, and Scikit-learn to analyze data and build predictive models.",
    },
    {
        title: "Ultimate UI/UX Design Course",
        img: "https://placehold.co/600x400/030712/ec4899?text=UI%2FUX",
        video: "https://cdn.pixabay.com/video/2020/09/22/49881-460863819_large.mp4",
        tag: "Free",
        tagType: "free",
        description: "Learn design principles and create beautiful, user-friendly interfaces with Figma.",
    },
    {
        title: "Cybersecurity Essentials",
        img: "https://placehold.co/600x400/030712/ef4444?text=Cybersecurity",
        video: "https://cdn.pixabay.com/video/2019/07/28/24796-350785934_large.mp4",
        tag: "Pro",
        tagType: "pro",
        description: "Protect systems from cyber threats by learning ethical hacking and network security.",
    },
    {
        title: "Blockchain & Cryptocurrency",
        img: "https://placehold.co/600x400/030712/8b5cf6?text=Blockchain",
        video: "https://cdn.pixabay.com/video/2021/11/11/95832-652373801_large.mp4",
        tag: "Pro",
        tagType: "pro",
        description: "Understand the technology behind Bitcoin and build your own decentralized applications.",
    },
    {
        title: "Cloud Computing with AWS",
        img: "https://placehold.co/600x400/030712/10b981?text=Cloud+Computing",
        video: "https://cdn.pixabay.com/video/2021/09/21/88851-619020353_large.mp4",
        tag: "Free",
        tagType: "free",
        description: "Get started with cloud infrastructure and services using Amazon Web Services (AWS).",
    },
    {
        title: "Mobile App Development",
        img: "https://placehold.co/600x400/030712/3b82f6?text=Mobile+Dev",
        video: "https://cdn.pixabay.com/video/2019/11/29/29723-370590740_large.mp4",
        tag: "Pro",
        tagType: "pro",
        description: "Build beautiful native mobile apps for both iOS and Android using React Native.",
    },
    {
        title: "Game Development with Unity",
        img: "https://placehold.co/600x400/030712/eab308?text=Game+Dev",
        video: "https://cdn.pixabay.com/video/2024/02/16/200789-913417711_large.mp4",
        tag: "Pro",
        tagType: "pro",
        description: "Create your first 2D and 3D games from scratch using the powerful Unity engine.",
    },
    {
        title: "Introduction to Python",
        img: "https://placehold.co/600x400/030712/64748b?text=Intro+to+Python",
        video: "https://cdn.pixabay.com/video/2020/09/22/49881-460863819_large.mp4",
        tag: "Free",
        tagType: "free",
        description: "A beginner-friendly introduction to the Python programming language and its concepts.",
    },
];

// Helper for tag styling
const tagClass = (type) =>
    type === "pro"
        ? "pro-tag"
        : "free-tag";

// Mouse event handlers for video preview
const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play();
};
const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
};

return (
    <main className="relative overflow-hidden py-16 sm:py-24 mt-16">
        <div className="glow-bg top-0 -left-1/4 w-1/2 h-1/2 bg-sky-600 animate-pulse"></div>
        <div
            className="glow-bg bottom-0 -right-1/4 w-2/3 h-2/3 bg-fuchsia-600 animate-pulse"
            style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Explore Our Courses
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Dive into the world of technology with our curated list of courses, designed for all skill levels.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses.map((course, idx) => (
                    <Link
                        to="/course/section"
                        className="course-card cursor-pointer"
                        key={idx}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="thumbnail-container">
                            <img src={course.img} alt={course.title + " Thumbnail"} />
                            <video
                                loop
                                muted
                                playsInline
                                src={course.video}
                                style={{ width: "100%", height: "auto" }}
                            ></video>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                                <span className={tagClass(course.tagType)}>{course.tag}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{course.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </main>
);
}

export default Course