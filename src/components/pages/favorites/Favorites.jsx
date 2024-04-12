import React from "react"; 
import "./Favorites.css"; 

// Definimos el componente Favorites como un componente funcional que recibe favoriteContacts y deleteFavorite como props
export const Favorites = ({ favoriteContacts, deleteFavorite }) => {
  return (
    <div className="favorite-container"> 
      <h1>
        Favorites <img src="src/assets/linea.png" alt="linea" className="linea" /> 
      </h1>
      <ul>
        <div className="card-favorite"> 
          {/* Mapeamos los contactos favoritos y renderizamos una tarjeta de favoritos para cada uno */}
          {favoriteContacts.map((contact, index) => (
            <div className="favorites" key={index}> 
              {/* Mostramos la foto del contacto solo si existe */}
              {contact.image && (
                <div className="Favoritesphoto"> 
                  {/* Mostramos la imagen del contacto */}
                  <img
                    src={URL.createObjectURL(contact.image)} // URL de la imagen del contacto
                    alt={`${contact.firstName} ${contact.lastName}`} // Texto alternativo para la imagen
                    className="Favoritesimg2" 
                  />
                </div>
              )}
              {/* Si no hay una imagen de contacto, mostramos una imagen predeterminada */}
              {!contact.image && (
                <div className="Favoritesphoto"> 
                  {/* Mostramos una imagen predeterminada o el avatar del contacto */}
                  <img  
                    src={contact.avatar || "https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg"}
                    alt={`${contact.firstName} ${contact.lastName}`} // Texto alternativo para la imagen
                    className="Favoritesimg2" 
                  />
                </div>
              )}
              {/* Mostramos el nombre y apellido del contacto */}
              <h3>
                {contact.firstName} {contact.lastName}
              </h3>
              {/* Mostramos el correo electrónico del contacto */}
              <p>{contact.email}</p>
              <div className="buttons-remove"> 
                {/* Botón para eliminar el contacto de favoritos */}
                <img
                  src="src/assets/delete.png" // URL de la imagen del botón de eliminar
                  alt="Delete" // Texto alternativo para el botón
                  onClick={() => deleteFavorite(contact)} // Llamamos a la función deleteFavorite con el contacto como argumento al hacer clic en el botón
                  className="button-remove" 
                />
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};
