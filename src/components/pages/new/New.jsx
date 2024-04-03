import React, { useState } from "react";
import "./New.css";

export const New = ({ onAddContact, onAddToFavorites }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      firstName,
      lastName,
      email,
      image, // Incluir la imagen en el objeto newContact
    };
    onAddContact(newContact);
    if (isFavorite) {
      onAddToFavorites(newContact);
    }
    // Reiniciar valores después de enviar el formulario
    setFirstName("");
    setLastName("");
    setEmail("");
    setImage(null);
    setIsFavorite(false);
  };

  return (
    <div className="fondo">
      <h1>New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>
        <div>
          <label>
            Add to Favorites:
            <input type="checkbox" checked={isFavorite} onChange={handleFavoriteChange} />
          </label>
        </div>
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};
