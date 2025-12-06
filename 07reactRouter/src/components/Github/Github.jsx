// import React, { useState, useEffect } from 'react';

const Github = () => {

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Prajjwal-dev")
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setData(json);
    //         })
    //         .catch(err => console.error("Error fetching GitHub data:", err));
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}

            <div className='mt-4'>
                <img 
                    src={data.avatar_url} 
                    alt="Git Picture" 
                    width={300}
                    className='mx-auto rounded-xl'
                />
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/Prajjwal-dev")
    return response.json()
}