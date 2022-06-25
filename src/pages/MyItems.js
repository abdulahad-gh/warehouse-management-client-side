import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase-init.js'

const MyItems = () => {
    const [user, loading] = useAuthState(auth)
    const { data: inventories, isLoading } = useQuery(['inventories', user.email], () => fetch(`http://localhost:5000/myItems/${user.email}`).then(res => res.json()))
    if (isLoading) {

    }
    console.log(inventories);


    return (
        <div className='h-screen'>
            <h1 className='mt-32 text-2xl text-center'>My Itmes</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>img</th>
                            <th>Item name</th>
                            <th>Fa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyItems;