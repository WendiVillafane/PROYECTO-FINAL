import React from 'react';
import './Card.css';

const Card = ({ contact, onAddToFavorites, onDeleteContact }) => {
  // Function to handle deleting a contact
  const handleDelete = () => {
    onDeleteContact(contact.id); // Pasar el ID del contacto a la función onDeleteContact
  };

  const handleAddToFavorites = () => {
    onAddToFavorites(contact); // Llamar a onAddToFavorites con el contacto como argumento
  };

  return (
    <div className="card">
      {/* Mostrar la foto solo si hay una imagen */}
      {contact.image ? (
        <img src={URL.createObjectURL(contact.image)} alt={`${contact.firstName} ${contact.lastName}`} className="contact-image" />
      ) : (
        <div className="default-photo-container">
          <img src={contact.avatar || 'https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg'} alt={`${contact.firstName} ${contact.lastName}`} className="default-photo" />
        </div>
      )}
      <h3>{contact.firstName} {contact.lastName}</h3>
      <p>{contact.email}</p>
      <div className="button-container"> 
        {/* Llamar a handleAddToFavorites al hacer clic en el botón de añadir a favoritos */}
        <img src="src/assets/heart.png" alt="Add to Favorites" onClick={handleAddToFavorites} className="button-image" />
        {/* Llamar a handleDelete al hacer clic en el botón de eliminar */}
        <img src="src/assets/delete.png" alt="Delete" onClick={handleDelete} className="button-image" />
      </div>
    </div>
  );
};

export default Card;
