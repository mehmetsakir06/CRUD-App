import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from '../ReduxAssets/UserReducers';
import { useNavigate } from 'react-router-dom';


function CreateNewUser() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewUser({ id: users.length + 1, name, surname, email, phone, address }));
        navigate('/');
    }

    return (
        <div className='d-flex  w-150 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-info text-white p-5 '>
                <h2>Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            name='surname'
                            className='form-control'
                            onChange={e => setSurname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            name='phone'
                            className='form-control'
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                            type="text"
                            name='address'
                            className=' form-control'
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-primary mt-2  '>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default CreateNewUser;