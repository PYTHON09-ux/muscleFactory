import React, { useState, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
// import { fetchProtectedData } from '../utils/fetchUser';

function GetProfile() {

  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      if (!isLoaded || !isSignedIn) return;

      const token = await getToken();
      const res = await fetch('http://localhost:8000/api/v1/users/getuser', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log(data.data)
      setProfile(data.data);
    };

    fetchUser();
  }, [isLoaded, isSignedIn, getToken]);

  return (
    <div>
      <h1>User Info</h1>
      <p>First Name: {profile?.username||"guest"}</p>
      <p>Last Name: {profile.lastName}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default GetProfile;
