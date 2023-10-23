import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ contact, onDeleteClick, onEditClick }) => {
  const handleDelete = () => {
    onDeleteClick(contact.id);
  };

  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">
            {contact.firstName} {contact.lastName}
          </p>
          <p>Status: {contact.status}</p>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            <Link to={`/edit/${contact.id}`}>
              Edit
            </Link>

          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
