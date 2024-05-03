import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../ReduxAssets/UserReducers';


function DataList() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))

    }

    return (
        <div className='container'>
            <h2>Add Users </h2>
            <Link to='/create' className='m-2 btn btn-primary'>Create</Link>

            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname} </td>
                                <td>{user.email} </td>
                                <td>
                                    <Link to={`/read/${user.id}`} className='btn btn-success'>Read</Link>
                                    <Link to={`/edit/${user.id}`} className='btn btn-secondary mx-1'>Edit</Link>
                                    <button className='btn btn-danger ' onClick={() => handleDelete(user.id)} >Delete</button>

                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div >
    )
}

export default DataList;




