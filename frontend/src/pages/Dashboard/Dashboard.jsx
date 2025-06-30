import React, { useState, useEffect } from 'react';

// Main App component
export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('profile'); // State to manage active section

  // Function to render the content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'myLearnings':
        return <MyLearningsSection />;
      case 'paymentMethods':
        return <PaymentMethodsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="max-w-[1500px] overflow-hidden *:relative  mx-auto pt-16">
      {/* Background Animation */}
      

    

      {/* Dashboard Layout */}
      <div className="relative z-10 flex flex-col md:flex-row mt-8 p-4 md:p-8 gap-6 max-w-full mx-auto">
        {/* Left Sidebar */}
        <aside className="w-full md:w-64 bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-3">Dashboard Menu</h2>
          <NavItem icon="👤" text="Profile" section="profile" activeSection={activeSection} setActiveSection={setActiveSection} />
          <NavItem icon="📚" text="My Learnings" section="myLearnings" activeSection={activeSection} setActiveSection={setActiveSection} />
          <NavItem icon="💳" text="Payment Methods" section="paymentMethods" activeSection={activeSection} setActiveSection={setActiveSection} />
          <NavItem icon="🚪" text="Sign Out" section="signOut" activeSection={activeSection} setActiveSection={setActiveSection} />
        </aside>

        {/* Right Content Section */}
        <main className="flex-1 bg-gray-800 rounded-xl shadow-lg p-6">
          {renderContent()}
        </main>
      </div>

      {/* Tailwind CSS keyframes for animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes wave-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, 5%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite alternate;
        }
        .animate-wave-slow {
          animation: wave-slow 15s infinite alternate;
        }
      `}</style>
    </div>
  );
}

// NavItem Component for sidebar links
const NavItem = ({ icon, text, section, activeSection, setActiveSection }) => {
  const isActive = activeSection === section;
  const baseClasses = "flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer";
  const activeClasses = "bg-[#33e6e6] text-gray-900 shadow-md transform scale-105 font-semibold";
  const inactiveClasses = "text-gray-300 hover:bg-gray-700 hover:text-[#4dffff]";

  const handleClick = () => {
    if (section === 'signOut') {
      // Implement sign out logic here (e.g., clear user session, redirect)
      if (window.confirm('Are you sure you want to sign out?')) { // Using confirm for demo, replace with custom modal
        console.log('Signing out...');
        // Example: history.push('/login');
      }
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={handleClick}
    >
      <span className="mr-3 text-lg">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
};

// Profile Section Component
const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    username: 'johndoe',
    memberSince: 'January 2023',
    aboutMe: 'Passionate learner with a strong interest in web development and data science. Always looking for new opportunities to expand knowledge and skills.',
    profileImageUrl: 'https://placehold.co/150x150/4dffff/000000?text=JD' // Default placeholder
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prevData => ({ ...prevData, profileImageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // In a real application, you would send profileData to a backend API
    console.log('Saving changes:', profileData);
    setIsEditing(false);
    alert('Profile updated successfully!'); // Replace with custom notification
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#4dffff] mb-6 pb-2 border-b border-gray-700">My Profile</h2>

      {/* Profile Photo Section */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-inner mb-6 flex flex-col items-center">
        <img
          src={profileData.profileImageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#4dffff] shadow-lg mb-4 transition-all duration-300 hover:scale-105"
        />
        <input
          type="file"
          id="profileImageUpload"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <label
          htmlFor="profileImageUpload"
          className="cursor-pointer bg-[#4dffff] hover:bg-[#33e6e6] text-gray-900 px-5 py-2 rounded-full shadow-md transition-colors duration-200 font-semibold"
        >
          Change Photo
        </label>
      </div>

      {/* Profile Information Form */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-inner">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-600">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 rounded-md bg-gray-800 text-white border ${isEditing ? 'border-[#4dffff]' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#4dffff] transition-all duration-200`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 rounded-md bg-gray-800 text-white border ${isEditing ? 'border-[#4dffff]' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#4dffff] transition-all duration-200`}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 rounded-md bg-gray-800 text-white border ${isEditing ? 'border-[#4dffff]' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#4dffff] transition-all duration-200`}
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-300 text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 rounded-md bg-gray-800 text-white border ${isEditing ? 'border-[#4dffff]' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#4dffff] transition-all duration-200`}
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-300 text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 rounded-md bg-gray-800 text-white border ${isEditing ? 'border-[#4dffff]' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#4dffff] transition-all duration-200`}
              />
            </div>
            <div>
              <label htmlFor="memberSince" className="block text-gray-300 text-sm font-medium mb-1">Member Since</label>
              <input
                type="text"
                id="memberSince"
                name="memberSince"
                value={profileData.memberSince}
                readOnly // This field is usually not editable
                className="w-full p-2 rounded-md bg-gray-800 text-gray-400 border border-gray-600 cursor-not-allowed"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="aboutMe" className="block text-gray-300 text-sm font-medium mb-1">About Me</label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={profileData.aboutMe}
              onChange={handleChange}
              readOnly={!isEditing}
              rows="4"
              className={`w-full p-2 rounded-md bg-gray-800 text-white border ${isEditing ? 'border-[#4dffff]' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#4dffff] transition-all duration-200 resize-y`}
            ></textarea>
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSaveChanges}
                className="bg-[#4dffff] hover:bg-[#33e6e6] text-gray-900 px-6 py-2 rounded-full shadow-md transition-colors duration-200 font-semibold"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// My Learnings Section Component
const MyLearningsSection = () => (
  <div>
    <h2 className="text-3xl font-bold text-[#4dffff] mb-6 pb-2 border-b border-gray-700">My Learnings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Learning Card 1 */}
      <LearningCard
        title="Complete Web Development Bootcamp"
        instructor="Angela Yu"
        rating="4.8"
        ratingsCount="12,000"
        progress={85}
        thumbnail="https://placehold.co/400x200/2C3E50/FFFFFF?text=Web+Dev"
      />

      {/* Learning Card 2 */}
      <LearningCard
        title="Python for Data Science and Machine Learning Bootcamp"
        instructor="Jose Portilla"
        rating="4.7"
        ratingsCount="9,500"
        progress={60}
        thumbnail="https://placehold.co/400x200/34495E/FFFFFF?text=Data+Science"
      />

      {/* Learning Card 3 */}
      <LearningCard
        title="The Ultimate React Course 2024"
        instructor="Jonas Schmedtmann"
        rating="4.9"
        ratingsCount="15,000"
        progress={30}
        thumbnail="https://placehold.co/400x200/1ABC9C/FFFFFF?text=React+Dev"
      />
    </div>
  </div>
);

// Learning Card Component
const LearningCard = ({ title, instructor, rating, ratingsCount, progress, thumbnail }) => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    // Animate progress bar on component mount
    setProgressBarWidth(progress);
  }, [progress]);

  return (
    <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg hover:scale-103 transition-all duration-300 group">
      <img src={thumbnail} alt="Course Thumbnail" className="rounded-md mb-4 w-full h-32 object-cover" />
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">Instructor: {instructor}</p>
      <div className="flex items-center mb-3">
        <span className="text-yellow-400 text-lg mr-2">⭐</span>
        <span className="text-gray-300">{rating} ({ratingsCount} ratings)</span>
      </div>
      <div className="mb-3">
        <p className="text-[#4dffff] font-bold mb-1">Progress: {progress}% Completed</p>
        <div className="w-full bg-gray-600 rounded-full h-2.5">
          <div
            className="bg-[#4dffff] h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
      </div>
      <button className="bg-[#4dffff] hover:bg-[#33e6e6] text-gray-900 px-4 py-2 rounded-full w-full shadow-md transition-colors duration-200 font-semibold">Continue Course</button>
    </div>
  );
};


// Payment Methods Section Component (unchanged from previous version)
const PaymentMethodsSection = () => (
  <div>
    <h2 className="text-3xl font-bold text-[#4dffff] mb-6 pb-2 border-b border-gray-700">Payment Methods</h2>
    <div className="space-y-6">
      {/* Credit Card */}
      <div className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-3xl mr-4">💳</span>
          <div>
            <h3 className="text-xl font-semibold">Credit Card (**** **** **** 1234)</h3>
            <p className="text-gray-400">Expires: 12/26</p>
          </div>
        </div>
        <div className="space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200">Remove</button>
        </div>
      </div>

      {/* PayPal */}
      <div className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-3xl mr-4">🅿️</span>
          <div>
            <h3 className="text-xl font-semibold">PayPal (john.doe@example.com)</h3>
            <p className="text-gray-400">Default method</p>
          </div>
        </div>
        <div className="space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200">Remove</button>
        </div>
      </div>

      {/* Add New Method */}
      <div className="bg-gray-700 p-5 rounded-lg shadow-md flex flex-col items-center justify-center border-2 border-dashed border-gray-600 hover:border-[#4dffff] transition-colors duration-200 cursor-pointer">
        <span className="text-5xl text-gray-500 mb-3">+</span>
        <p className="text-lg text-gray-400">Add New Payment Method</p>
      </div>
    </div>
  </div>
);
