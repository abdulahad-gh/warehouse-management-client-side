import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase-init';

const AddItem = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <p className='flex justify-center items-center text-4xl'>loading...</p>
    }
    const handleAddItem = e => {
        e.preventDefault();
        const img = e.target.img.value;
        const name = e.target.name.value;
        const desc = e.target.desc.value;
        const price = e.target.price.value;
        const quan = e.target.quan.value;
        const supplier = e.target.supplier.value;

        const item = { name, desc, price, quan, supplier, img, email: user.email };
        console.log(item);
        // send data to the server
        if (img != '' && name != '' && desc != '' && price != '' && quan != '' && supplier != '') {
            fetch('https://sheltered-dusk-38302.herokuapp.com/inventories', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast(' added inventory successfully.');
                    }
                    e.target.reset();
                })
        }
        else {
            alert('must be include value, for every fields')
        }
    }

    return (
        <div className='px-2'>
            <h1 className='mt-28 mb-10 text-center text-3xl'>Add Item</h1>

            <div className='flex justify-center'>

                <form className='w-80' onSubmit={handleAddItem}>
                    <div class="mb-6">

                        <input type="text" name='img' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="img url" required="" />
                    </div>
                    <div class="mb-6">

                        <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name" required="" />
                    </div>
                    <div class="mb-6">

                        <textarea type="text" name='desc' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='short desc'></textarea>
                    </div>
                    <div class="mb-6">

                        <input type="number" name='price' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='price' />
                    </div>
                    <div class="mb-6">

                        <input type="number" name='quan' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='quantity' />
                    </div>
                    <div class="mb-6">

                        <input type="text" name='supplier' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Supplier Name' />
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddItem;