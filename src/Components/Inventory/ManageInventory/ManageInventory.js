import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ManageInventory = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://razer-house.onrender.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto mt-5 mb-5'>
            <h2>Manage Inventory</h2>
            {
                items.map(item => <div key={item._id}>
                    <h5>{item.name} <button className='btn btn-outline-dark' onClick={() => handleDelete(item._id)}>X</button></h5>
                </div>)
            }
            <Link to='/add'><button className='btn btn-outline-dark'>Add More items</button></Link>
        </div>
    );
};

export default ManageInventory;