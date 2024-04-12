import React from "react"; 
import "./Overview.css"; 

// Definimos el componente Overview como un componente funcional que recibe contacts, favoriteContacts, onAddToFavorites, onDeleteContact y onDeleteFavorite como props
export const Overview = ({ contacts, favoriteContacts, onAddToFavorites, onDeleteContact, onDeleteFavorite }) => {
  return (
    <div className="custom-contact-container"> 
      <h1>Contacts <img src="src/assets/linea.png" alt="linea" className="custom-linea" /></h1> 
      <div className="custom-card-container"> 
        {/* Mapeamos los contactos y renderizamos una tarjeta de contacto para cada uno */}
        {contacts.map((contact, index) => (
          <div className="custom-card" key={index}> 
            {/* Mostramos la foto del contacto solo si no hay una imagen */}
            {!contact.image && (
              <div className='custom-Overviewphoto'> 
                {/* Mostramos una imagen predeterminada o el avatar del contacto */}
                <img
                  src={contact.avatar || 'https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg'}
                  alt={`${contact.firstName} ${contact.lastName}`}
                  className='custom-Overviewimg' 
                />
              </div>
            )}
            {/* Si hay una imagen, la mostramos */}
            {contact.image && <img src={URL.createObjectURL(contact.image)} alt={`${contact.firstName} ${contact.lastName}`} />}
            <h3>{contact.firstName} {contact.lastName}</h3> {/* Nombre y apellido del contacto */}
            <p>{contact.email}</p> {/* Correo electrónico del contacto */}
            <div className="custom-button-remove"> {/* Definimos la clase CSS para el contenedor del botón de eliminar */}
              {/* Botón para agregar el contacto a favoritos */}
              <img src="src/assets/heart.png" alt="Add to Favorites" onClick={() => onAddToFavorites(contact)} className="custom-button-image" />
            </div>
          </div>
        ))}
      </div>
      <h1>Favorite <img src="src/assets/linea.png" alt="linea" className="custom-linea" /></h1> 
      <div className="custom-card-container"> 
        {/* Mapeamos los contactos favoritos y renderizamos una tarjeta de favoritos para cada uno */}
        {favoriteContacts.map((contact, index) => (
          <div className="custom-card2" key={index}> 
            {/* Mostramos la foto del contacto solo si no hay una imagen */}
            {!contact.image && (
              <div className='custom-Overviewphoto'> 
                {/* Mostramos una imagen predeterminada o el avatar del contacto */}
                <img
                  src={contact.avatar || 'https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg'}
                  alt={`${contact.firstName} ${contact.lastName}`}
                  className='custom-Overviewimg' 
                />
              </div>
            )}
            {/* Si hay una imagen, la mostramos */}
            {contact.image && <img src={URL.createObjectURL(contact.image)} alt={`${contact.firstName} ${contact.lastName}`} />}
            <h3>{contact.firstName} {contact.lastName}</h3> {/* Nombre y apellido del contacto */}
            <p>{contact.email}</p> {/* Correo electrónico del contacto */}
            <div className="custom-button-remove"> 
              {/* Botón para eliminar el contacto de favoritos */}
              <img src="src/assets/delete.png" alt="Delete" onClick={() => onDeleteFavorite(contact)} className="custom-button-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
