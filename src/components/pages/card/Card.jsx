import React from 'react'; 
import './Card.css'; 


const Card = ({ contact, onAddToFavorites, onDeleteContact }) => {
  // Definimos una función para manejar la eliminación de un contacto
  const handleDelete = () => {
    onDeleteContact(contact.id); // Llamamos a la función onDeleteContact y pasamos el ID del contacto como argumento
  };

  // Definimos una función para manejar la adición de un contacto a favoritos
  const handleAddToFavorites = () => {
    onAddToFavorites(contact); // Llamamos a la función onAddToFavorites y pasamos el contacto como argumento
  };

  // Renderizamos el componente Card
  return (
    <div className="card"> 
     {/* Mostramos la foto del contacto solo si existe */}
     {contact.image && (
       <div className="Favoritesphoto3"> 
         {/* Mostramos la imagen del contacto */}
         <img
           src={URL.createObjectURL(contact.image)} // URL de la imagen del contacto
           alt={`${contact.firstName} ${contact.lastName}`} // Texto alternativo para la imagen
           className="Favoritesimg" 
         />
       </div>
     )}
     {/* Si no hay una imagen de contacto, mostramos una imagen predeterminada */}
     {!contact.image && (
       <div className="Favoritesphoto2"> 
         {/* Mostramos una imagen predeterminada o el avatar del contacto */}
         <img  
           src={contact.avatar || "https://osf-dev.averydennison.com/file/v324057085648320317/general/image-round-1-1@2x.jpg"}
           alt={`${contact.firstName} ${contact.lastName}`} // Texto alternativo para la imagen
           className="Favoritesimg" 
         />
       </div>
     )}
     {/* Mostramos el nombre y apellido del contacto */}
     <h3>{contact.firstName} {contact.lastName}</h3>
     {/* Mostramos el correo electrónico del contacto */}
     <p>{contact.email}</p>
     <div className="button-container">
       {/* Botón para añadir el contacto a favoritos */}
       <img src="src/assets/heart.png" alt="Add to Favorites" onClick={handleAddToFavorites} className="button-image" />
       {/* Botón para eliminar el contacto */}
       <img src="src/assets/delete.png" alt="Delete" onClick={handleDelete} className="button-image" />
     </div>
    </div>
  );
};

export default Card;
