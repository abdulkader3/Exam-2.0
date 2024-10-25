import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('User Name');
  const [profileImage, setProfileImage] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex flex-col items-center">
        {profileImage && <img src={profileImage} alt="Profile" className="rounded-full w-32 h-32 mb-4" />}
        <input type="file" onChange={handleImageUpload} className="mb-4" />
        <input 
          type="text" 
          value={name} 
          onChange={handleNameChange}
          className="border rounded-lg p-2 w-full mb-4"
        />
      </div>
    </div>
  );
}

export default UserProfile;
