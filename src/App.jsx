import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/pages/contact/Contact";
import { Favorites } from "./components/pages/favorites/Favorites";
import { New } from "./components/pages/new/New";
import { Overview } from "./components/pages/overview/Overview";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from "axios";

// Reducer
const initialState = {
  contacts: [],
  favoriteContacts: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload.id),
        favoriteContacts: state.favoriteContacts.filter(contact => contact.id !== action.payload.id)
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteContacts: [...state.favoriteContacts, action.payload]
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favoriteContacts: state.favoriteContacts.filter(contact => contact.id !== action.payload.id)
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

const App = () => {
  const [storeContacts, setStoreContacts] = useState([]);
  const [storeFavoriteContacts, setStoreFavoriteContacts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        const usersData = response.data.data.map(user => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          avatar: user.avatar
        }));
        setStoreContacts(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Function to handle adding a new contact
  const handleAddContact = (newContact) => {
    setStoreContacts([...storeContacts, newContact]); // Actualiza el estado local
    store.dispatch({ type: 'ADD_CONTACT', payload: newContact }); // Actualiza el estado de Redux
  };

  // Function to handle deleting a contact
  const handleDeleteContact = (contactId) => {
    const updatedContacts = storeContacts.filter(c => c.id !== contactId);
    setStoreContacts(updatedContacts);
  
    store.dispatch({ type: 'DELETE_CONTACT', payload: { id: contactId } });
  };

  // Function to handle adding a contact to favorites
  const handleAddToFavorites = (contact) => {
    setStoreFavoriteContacts([...storeFavoriteContacts, contact]);
    store.dispatch({ type: 'ADD_TO_FAVORITES', payload: contact }); // Actualiza el estado de Redux
  };

  // Function to handle removing a contact from favorites
  const handleRemoveFromFavorites = (contactId) => {
    const updatedFavoriteContacts = storeFavoriteContacts.filter(c => c.id !== contactId);
    setStoreFavoriteContacts(updatedFavoriteContacts);
    store.dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { id: contactId } }); // Actualiza el estado de Redux
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/favorites" element={<Favorites favoriteContacts={storeFavoriteContacts} onDeleteFavorite={handleRemoveFromFavorites} />} />
          <Route path="/new" element={<New onAddContact={handleAddContact} />} />
          <Route path="/" element={<Overview contacts={storeContacts} favoriteContacts={storeFavoriteContacts} onAddToFavorites={handleAddToFavorites} onDeleteContact={handleDeleteContact} />} />
          <Route path="/contact" element={<Contact contacts={storeContacts} onAddToFavorites={handleAddToFavorites} onDeleteContact={handleDeleteContact} />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
