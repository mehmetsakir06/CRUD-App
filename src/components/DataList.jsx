import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DataList() {
    const users = useSelector((state) => state.users);


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
                                    <button className='btn btn-success'>Read</button>
                                    <button className='btn btn-secondary mx-1'>Edit</button>
                                    <button className='btn btn-danger ' >Delete</button>

                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default DataList;




