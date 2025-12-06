import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    // If user is null, show a fallback message
    if (!user) {
        return <div>No user logged in</div>;
    }

    // User exists, safe to access username
    return (
        <div>
            <h1>Welcome {user.username}</h1>
            <p>Password: {user.password}</p>
        </div>
    );
}

export default Profile;
