import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import useLoading from '../../../Hooks/useLoading';

const Inventory = () => {
    useLoading(true)
    const { id } = useParams();
    const [load, setLoad] = useState(false);
    const [inventory, setInventory] = useState({});
    const [recall, setRecall] = useState(false);


    useEffect(() => {
        const url = `https://sheltered-dusk-38302.herokuapp.com/inventories/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id, recall])



    const handleUpdateQuan = e => {
        setLoad(true)
        e.preventDefault()
        const quan = e.target.quan.value;
        const updateQuan = { quan }
        const url = `https://sheltered-dusk-38302.herokuapp.com/inventories/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuan)

        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setRecall(!recall)
                    setTimeout(() => {

                        setLoad(false)
                    }, 1000)


                }
            })

    }

    return (
        <div className='h-screen flex flex-col	 justify-center items-center mt-20'>
            <h2 className='text-center text-3xl mt-20 mb-10'>inventory Detail page</h2>

            <div className='flex justify-center'>
                <div>
                    <div class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">


                        <img class="rounded h-60 w-full object-cover" src={inventory?.img} alt="lapt" />

                        <div class="p-5">

                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{inventory.name}</h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{inventory.desc}.</p>
                            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Price: {inventory.price} tk</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {inventory.quan}</p>
                            <p class="mb-3 italic  text-gray-700 dark:text-gray-400">Supplier: {inventory.supplier}.</p>
                            <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Delivered
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                    </div>
                    <div className="mt-6">
                        <form onSubmit={handleUpdateQuan}>
                            <div className='flex flex-col px-4 items-center gap-4 md:flex-row	'>
                                <input type="number" name="quan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Restock Quantity" required="" />

                                <button type="submit" class="text-white shrink w-64 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{load ? 'Restock...' : 'Restock the items'}</button>
                            </div>

                        </form>

                    </div>
                    <Link to="/manageitems" class=" block mx-auto text-white text-center shrink w-64 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Manage Inventories</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;