import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const Dashboard = () => {
    const [userData, setUserData] = useState([])

    const getUser = async () => {
        const res = await axios.get('/getUser');
        if (res.statusText === 'OK') {
            setUserData(res.data.user)
        }
    }

    useEffect(() => {
        getUser()
    }, [userData])

    return (
        <>
            <h2 className='sm:text-xl mb-4 text-black text-8xl'>All Registered User</h2>
            <div class="flex flex-col p-12">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead
                                    class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Sno</th>
                                        <th scope="col" class="px-6 py-4">Name</th>
                                        <th scope="col" class="px-6 py-4">Email</th>
                                        <th scope="col" class="px-6 py-4">Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData && userData.map((e,i) =>
                                    <>
                                    <tr key={e.id}
                                        class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{i+1}</td>
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{e.name}</td>
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{e.email}</td>
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{moment(e.createdAt).format('DD-MM-YY')}</td>
                                    </tr>
                                    </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard