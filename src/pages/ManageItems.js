import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../Hooks/useData';
import Spinner from './shared/Spinner';

const ManageItems = () => {
    const [loading, setLoading] = useState(true)
    const [laptops, setLaptops] = useState([])

    useEffect(() => {
        fetch('https://sheltered-dusk-38302.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => {
                setLaptops(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <Spinner />
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this inventory?');
        if (proceed) {
            const url = `https://sheltered-dusk-38302.herokuapp.com/inventories/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = laptops.filter(items => items._id !== id);
                        setLaptops(remaining);
                    }
                })
        }
    }

    return (
        <div className='h-screen px-4 mb-64 lg:mb-40'>
            <h1 className='mt-28 mb-10 text-center text-3xl '>ManageItems</h1>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 absolute right-0">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        laptops.map(laptop => <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {laptop.name}
                                </th>
                                <td class="px-6 py-4">
                                    {laptop.price}
                                </td>
                                <td class="px-6 py-4">
                                    {laptop.supplier}
                                </td>
                                <td class="px-6 py-4">
                                    {laptop.quan}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button onClick={() => handleDelete(laptop._id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                </td>
                            </tr>

                        </tbody>)
                    }
                </table>
            </div>
            <Link to="/additem" class=" mt-4 block mx-auto text-white text-center shrink w-40 lg:w-64 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</Link>

        </div>
    );
};

export default ManageItems;