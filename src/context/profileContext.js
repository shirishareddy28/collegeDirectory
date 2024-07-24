import React, { createContext, useState, useEffect } from 'react';
import { fetchProfile, updateProfile } from '../api';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchProfile();
        setProfile(profileData);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    loadProfile();
  }, []);

  const updateProfileData = async (newProfile) => {
    try {
      await updateProfile(newProfile);
      setProfile(newProfile);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
