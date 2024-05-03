import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function ReadUser() {

    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const selectedUser = users.filter(u => u.id == id);
    const { name, surname, email, phone, address } = selectedUser[0];

    return (
        <div className='d-flex  w-150 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-info text-white p-5 '>
                <h2>Read User</h2>
                <form >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            value={name}

                        />

                    </div>
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            name='surname'
                            className='form-control'
                            value={surname}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            name='phone'
                            className='form-control'
                            value={phone}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                            type="text"
                            name='address'
                            className=' form-control'
                            value={address}
                        />
                    </div>

                    <Link to={'/'} className='btn btn-primary mt-2  '>Back</Link >
                </form>
            </div>
        </div>
    )
}

export default ReadUser;