import React, { useState, useEffect } from "react"; 
import Card from "../card/Card"; 
import "./Contact.css"; 

// Definimos el componente Contact como un componente funcional que recibe props como argumento
export const Contact = ({ contacts, onAddToFavorites, onDeleteContact }) => {
  // Definimos el estado local para almacenar el número de página actual
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 8; // Definimos el número de contactos por página

  // Calculamos el índice del último contacto a mostrar en la página actual
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  // Obtenemos los contactos que corresponden a la página actual
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  // Función para ir a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Efecto secundario para establecer la página actual en 1 cuando cambian los contactos
  useEffect(() => {
    setCurrentPage(1); // Establecemos la página actual en 1
  }, [contacts]); // El efecto se ejecutará cuando cambie el array de contactos

  // Función para manejar la eliminación de un contacto
  const handleDeleteContact = (contactId) => {
    onDeleteContact(contactId); // Llamamos a la función onDeleteContact con el ID del contacto como argumento
  };

  // Renderizamos el componente Contact
  return (
    <div className="contact-container">
      <h1>
        Contact <img src="src/assets/linea.png" alt="linea" className="linea" /> {/* Insertamos una imagen de línea */}
      </h1>
      <div className="cards-container"> 
        {/* Mapeamos los contactos actuales y renderizamos el componente Card para cada uno */}
        {currentContacts.map((contact, index) => (
          <Card
            key={index}
            contact={contact}
            onAddToFavorites={onAddToFavorites}
            onDeleteContact={() => handleDeleteContact(contact.id)} // Pasamos la función para eliminar un contacto con el ID del contacto como argumento
          />
        ))}
      </div>
      {/* Renderizamos la paginación si hay más contactos que el número de contactos por página */}
      {contacts.length > contactsPerPage && (
        <div className="pagination"> 
          {/* Botón para ir a la página anterior, deshabilitado si estamos en la primera página */}
          <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
          {/* Mostramos el número de página actual */}
          <span>{currentPage}</span>
          {/* Botón para ir a la página siguiente, deshabilitado si estamos en la última página */}
          <button onClick={nextPage} disabled={indexOfLastContact >= contacts.length}>Next</button>
        </div>
      )}
    </div>
  );
};
