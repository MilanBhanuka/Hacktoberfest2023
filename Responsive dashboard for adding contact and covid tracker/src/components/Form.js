import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        status: '',
    });
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const uniqueId = uuidv4();
        dispatch(addContact({ ...formData, id: uniqueId }));
        setFormData({
          firstName: '',
          lastName: '',
          status: '',
        });
        Navigate('/')
      };
      

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Create Contact</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                    <div className="flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            id="active"
                            name="status"
                            value="active"
                            checked={formData.status === 'active'}
                            onChange={handleChange}
                            required
                        />
                        <label className="text-sm" htmlFor="active">
                            Active
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            id="inactive"
                            name="status"
                            value="inactive"
                            checked={formData.status === 'inactive'}
                            onChange={handleChange}
                            required
                        />
                        <label className="text-sm" htmlFor="inactive">
                            Inactive
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Save Button
                    </button>
                </div>
            </form>
            <Link to="/" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">View Saved Data</Link>
        </div>
    );
};

export default Form;
