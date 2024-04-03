import React from "react";
import './Overview.css';

export const Overview = ({ contacts, favoriteContacts, onAddToFavorites, onDeleteContact, onDeleteFavorite }) => {
  return (
    <div className="custom-contact-container">
      <h1> Contacts <img src="src/assets/linea.png" alt="linea" className="custom-linea" /></h1>
      <div className="custom-card-container">
        {contacts.map((contact, index) => (
          <div className="custom-card" key={index}>
            {/* Mostrar la foto de vista general solo si no hay imagen */}
            {!contact.image && (
              <div className='custom-Overviewphoto'>
                <img src={contact.avatar || 'https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg'} alt={`${contact.firstName} ${contact.lastName}`} className='custom-Overviewimg'/>
              </div>
            )}
            {contact.image && <img src={URL.createObjectURL(contact.image)} alt={`${contact.firstName} ${contact.lastName}`} />}
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>{contact.email}</p>
            <div className="custom-button-remove">
              <img src="src/assets/heart.png" alt="Add to Favorites" onClick={() => onAddToFavorites(contact)} className="custom-button-image"/>
            </div>
          </div>
        ))}
      </div>
      <h1>Favorite <img src="src/assets/linea.png" alt="linea" className="custom-linea" /></h1>
      <div className="custom-card-container">
        {favoriteContacts.map((contact, index) => (
          <div className="custom-card" key={index}>
            {/* Mostrar la foto de vista general solo si no hay imagen */}
            {!contact.image && (
              <div className='custom-Overviewphoto'>
                <img src={contact.avatar || 'https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg'} alt={`${contact.firstName} ${contact.lastName}`} className='custom-Overviewimg'/>
              </div>
            )}
            {contact.image && <img src={URL.createObjectURL(contact.image)} alt={`${contact.firstName} ${contact.lastName}`} />}
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>{contact.email}</p>
            <div className="custom-button-remove">
              <img src="src/assets/delete.png" alt="Delete" onClick={() => onDeleteFavorite(contact)} className="custom-button-image"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
