// Contact.jsx

import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Contact.css";

export const Contact = ({ contacts, onAddToFavorites, onDeleteContact }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 8;

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset currentPage whenever contacts change
  }, [contacts]);

  const handleDeleteContact = (contactId) => {

    onDeleteContact(contactId);
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="cards-container">
        {currentContacts.map((contact, index) => (
          <Card
            key={index}
            contact={contact}
            onAddToFavorites={onAddToFavorites}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />
        ))}
      </div>
      {contacts.length > contactsPerPage && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
          <span>{currentPage}</span>
          <button onClick={nextPage} disabled={indexOfLastContact >= contacts.length}>Next</button>
        </div>
      )}
    </div>
  );
};
