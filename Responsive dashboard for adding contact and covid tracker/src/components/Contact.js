import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { deleteContact } from '../redux/actions';

const Contact = () => {
    const savedData = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const onDeleteClick = (id) => {
        dispatch(deleteContact(id));
        console.log(`Delete contact with ID ${id}`);
    };

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <Link
                to="/form"
                className="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center mb-4"
            >
                Create Contact
            </Link>
            <div>
                <h3 className="text-3xl font-bold mb-2 text-center">Saved Contacts</h3>
                {savedData.length === 0 ? (
                    <div className="flex items-center border rounded p-2 mb-2 bg-gray-100 text-2xl text-gray-600">
                        <div className="flex items-center cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 m-auto text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path
                                    fillRule="evenodd"
                                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-2 flex-grow">
                            No contact found. Please add contact from the Create Contact.
                        </div>
                    </div>
                ) : (
                    savedData.map((contact, index) => (
                        <Card
                            key={index}
                            contact={contact}
                            onDeleteClick={onDeleteClick}
                        />
                    ))
                )}
            </div>
        </div>

    )
}

export default Contact