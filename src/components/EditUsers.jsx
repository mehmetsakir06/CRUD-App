import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../ReduxAssets/UserReducers';


function EditUsers() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const selectedUser = users.filter(u => u.id == id);
    const { name, surname, email, phone, address } = selectedUser[0];
    const [updatename, setUpdatename] = useState(name);
    const [updatesurname, setUpdatesurname] = useState(surname);
    const [updateemail, setUpdateemail] = useState(email);
    const [updatephone, setUpdatephone] = useState(phone);
    const [updateaddress, setUpdateaddress] = useState(address);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: id, name: updatename, surname: updatesurname, email: updateemail, phone: updatephone, address: updateaddress }));
        navigate('/')
    }
    return (
        <div className='d-flex  w-150 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-info text-white p-5 '>
                <h2>Update User</h2>
                <form onSubmit={handleUpdate} >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            value={updatename}
                            onChange={e => setUpdatename(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            name='surname'
                            className='form-control'
                            value={updatesurname}
                            onChange={e => setUpdatesurname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            value={updateemail}
                            onChange={e => setUpdateemail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            name='phone'
                            className='form-control'
                            value={updatephone}
                            onChange={e => setUpdatephone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                            type="text"
                            name='address'
                            className=' form-control'
                            value={updateaddress}
                            onChange={e => setUpdateaddress(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-primary mt-2   '>Update</button>

                </form>

            </div>
        </div>
    )
}

export default EditUsers;