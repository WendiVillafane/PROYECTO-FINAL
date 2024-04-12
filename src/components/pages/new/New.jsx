import React, { useState } from "react"; 
import { v4 as uuidv4 } from 'uuid'; 
import "./New.css"; 

// Definimos el componente New como un componente funcional que recibe onAddContact y onAddToFavorites como props
export const New = ({ onAddContact, onAddToFavorites }) => {
  // Definimos los estados locales para almacenar los datos del nuevo contacto
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Funciones para manejar los cambios en los campos del formulario
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleFavoriteChange = (event) => {
    setIsFavorite(event.target.checked);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const newContact = {
      id: uuidv4(), // Generar un UUID único para el nuevo contacto
      firstName,
      lastName,
      email,
      image, // Incluir la imagen en el objeto newContact
    };
    // Llamar a la función onAddContact con el nuevo contacto como argumento
    onAddContact(newContact);
    // Si el contacto es marcado como favorito, llamar a la función onAddToFavorites
    if (isFavorite) {
      onAddToFavorites(newContact);
    }
    // Reiniciar los valores de los campos después de enviar el formulario
    setFirstName("");
    setLastName("");
    setEmail("");
    setImage(null);
    setIsFavorite(false);
  };

  // Renderizamos el componente New
  return (
    <div className="fondo"> 
      <h1>New Contact</h1>
      {/* Formulario para agregar un nuevo contacto */}
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} /> {/* Campo para el primer nombre */}
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} /> {/* Campo para el apellido */}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} /> {/* Campo para el correo electrónico */}
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} /> {/* Campo para subir una imagen */}
          </label>
        </div>
        <div>
          <label>
            Add to Favorites:
            <input type="checkbox" checked={isFavorite} onChange={handleFavoriteChange} /> {/* Checkbox para marcar como favorito */}
          </label>
        </div>
        {/* Botón para guardar el contacto */}
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};
