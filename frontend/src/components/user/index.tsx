import React from 'react';
import { userState } from '@/state/userState';
import { useRecoilState } from 'recoil';

const User = () => {
    const [user, setUser] = useRecoilState(userState);

    const login = () => {
        setUser({
            name: 'John Doe',
            age: 25,
        });
    };

    return (
        <div className="flex items-center space-x-4">
            {user ? (
                <span className="text-lg font-semibold">Hello, {user.name}</span>
            ) : (
                <span className="text-lg">Please log in</span>
            )}
            <button onClick={login} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Log In
            </button>
        </div>
    );
};

export default User;
