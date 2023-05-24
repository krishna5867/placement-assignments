import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [data, setData] = useState()
    console.log(data);

    const apiUrl = 'https://reqres.in/api';

    // Send request to get tasks
    const fetchTasks = () => {
        fetch(`${apiUrl}/tasks`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to retrieve tasks');
                }
            })
            .then(data => {
                console.log(data);
                setData(data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchTasks()
    }, [])


    return (
        <>
            <div className='flex flex-wrap'>
                {Array.isArray(data) && data.length > 0 ? (
                    data.map(e => (
                        <div className="p-4 md:w-1/4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{e.name}</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{e.name}</h1>
                                    <p className="leading-relaxed mb-3">{e.year}</p>
                                    <p className="leading-relaxed mb-3">{e.colour}</p>
                                    <p className="leading-relaxed mb-3">{e.pantone_value}</p>
                                    <div className="flex items-center flex-wrap ">

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tasks found</p>
                )}
            </div>
        </>
    )
}

export default Dashboard