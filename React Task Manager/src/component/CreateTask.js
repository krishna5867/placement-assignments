import React, { useState } from 'react'

const CreateTask = () => {
    const apiUrl = 'https://reqres.in/api';
    const [title, setTitle] = useState();
    const [description, setDescription] = useState()

    // Prompt user for task details
    // const title = prompt('Enter task title:');
    // const description = prompt('Enter task description:');

    // Send task creation request
    const taskData = {
        title: title,
        description: description
    };

const handleTask = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/tasks`, {
        method: 'POST',
        body: JSON.stringify(taskData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Successful task creation
                console.log('Task created successfully!');
                return response.json();
            } else {
                // Task creation failed
                throw new Error('Task creation failed');
            }
        })
        .then(data => {
            console.log('Task ID:', data.id);
            // You can perform additional actions here based on the created task data
        })
        .catch(error => {
            console.error(error);
        });
}
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create Task</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleTask}>
                        {/* Title */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                            </div>
                            <div className="mt-2">
                                <input id="title" name="title" onChange={(e) => setTitle(e.target.value)} type="text" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>
                        </div>
                        {/* Description */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="desc" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                            </div>
                            <div className="mt-2">
                                <input id="desc" onChange={(e) => setDescription(e.target.value)} name="text" type="desc" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateTask