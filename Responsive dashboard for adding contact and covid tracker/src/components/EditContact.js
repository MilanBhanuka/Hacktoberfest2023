import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateContact } from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';

const EditContact = () => {
    const { id } = useParams();
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const savedData = useSelector((state) => state.contacts);

    const contact = savedData.find((c) => c.id === id);
    useEffect(() => {
        if (contact) {
            setFormData({
                firstName: contact.firstName,
                lastName: contact.lastName,
                status: contact.status, 
            });
        }
    }, [contact]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        status: false, 
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleUpdate = () => {
        dispatch(updateContact({ ...formData, id }));
        Navigate('/')
    };

    if (!contact) {
        return <div>Contact not found</div>;
    }

    return (
        <div className="container mx-auto mt-4">
          <h3 className="text-2xl font-semibold mb-4">Edit Contact</h3>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Status:
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="active"
                  name="status"
                  value="active"
                  checked={formData.status === 'active'}
                  onChange={handleChange}
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
                />
                <label className="text-sm" htmlFor="inactive">
                  Inactive
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      );
};

export default EditContact;