import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const repoOwner = 'poudelsanchit';
    const repoName = 'DateSnaps';
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

    // const accessToken = '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'; // Replace with your actual access token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setContributors(response.data);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };

        fetchData();
    }, [apiUrl]);
    console.log(contributors)
    return (
        <div className='w-96  font-roboto flex flex-col items-center  pl-5 gap-4 '>
            <div className='text-2xl font-semibold'>Welcome to DateSnaps! 📸</div>
            <div>DateSnaps is a delightful project built using Vite, React.js, and Tailwind CSS.
                It serves as a unique way to store and cherish your memories by associating them with specific dates. Capture special moments in the form of photos and easily revisit them based on the dates they were created.</div>
            <div>
                <div className='text-2xl font-semibold'>Features :</div>
                <div className='text-base'>
                    <ul >
                        <li>
                            <div className='font-semibold'> Date-Centric Memories:
                            </div>
                            Organize your memories in a calendar format, making it easy to relive each moment on its anniversary.
                        </li>
                        <li>
                            <div className='font-semibold'>Photo Upload:
                            </div>
                            Upload and store photos with ease. Each photo is associated with a specific date for a personalized experience.
                        </li>
                    </ul>
                </div>
                <div className='font-semibold text-2xl mt-4'>
                    Github Contributors:
                </div>
                <div className='flex gap-2 '>
                {contributors.map(contributor => (
                    <a href={contributor.html_url} target='_blank'>
                                            <img src={contributor.avatar_url} alt="" className='h-14 w-14 object-cover rounded-full border-2 border-datessecondary' />

                    </a>
                ))}
                </div>
                
            </div>

        </div>
    );
};

export default Contributors;
