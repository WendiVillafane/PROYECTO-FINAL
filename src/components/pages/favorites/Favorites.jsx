import React from "react";
import './Favorites.css';

export const Favorites = ({ favoriteContacts, deleteFavorite }) => {
  return (
    <div className="favorite-container">
      <h1>Favorites <img src="src/assets/linea.png" alt="linea" className="linea" /></h1>
      <ul>
        <div className="card-favorite">
          {favoriteContacts.map((contact, index) => (
            <div className="favorites" key={index}>
              {/* Mostrar la foto de vista general solo si no hay imagen */}
              {!contact.image && (
                <div className='Favoritesphoto'>
                  <img src={contact.avatar || 'https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg'} alt={`${contact.firstName} ${contact.lastName}`} className='Favoritesimg'/>
                </div>
              )}
              {contact.image && <img src={URL.createObjectURL(contact.image)} alt={`${contact.firstName} ${contact.lastName}`} />}
              <h3>{contact.firstName} {contact.lastName}</h3>
              <p>{contact.email}</p>
              <div className="buttons-remove">
                <img src="src/assets/delete.png" alt="Delete" onClick={() => deleteFavorite(contact)} className="button-remove"/>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};
