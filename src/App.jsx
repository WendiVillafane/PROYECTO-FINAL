import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/pages/contact/Contact";
import { Favorites } from "./components/pages/favorites/Favorites";
import { New } from "./components/pages/new/New";
import { Overview } from "./components/pages/overview/Overview";
import { Provider } from 'react-redux'; 
import store from './store';
import axios from "axios"; 


const App = () => {
  // Definimos los estados locales para almacenar los contactos y los contactos favoritos
  const [storeContacts, setStoreContacts] = useState([]);
  const [storeFavoriteContacts, setStoreFavoriteContacts] = useState([]);

  // Hook useEffect para realizar una solicitud HTTP al API y obtener la lista de usuarios cuando el componente se monta por primera vez
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        // Mapeamos los datos de los usuarios recibidos para darles el formato deseado
        const usersData = response.data.data.map(user => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          avatar: user.avatar
        }));
        // Actualizamos el estado local con los datos de los usuarios recibidos
        setStoreContacts(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    // Llamamos a la función para obtener los usuarios
    fetchUsers();
  }, []); // La dependencia vacía asegura que el efecto se ejecute solo una vez, al montar el componente

  // Función para manejar la adición de un nuevo contacto
  const handleAddContact = (newContact) => {
    // Actualizamos el estado local con el nuevo contacto agregado
    setStoreContacts([...storeContacts, newContact]);
    // Disparamos una acción de Redux para actualizar el estado global del store
    store.dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };

  // Función para manejar la eliminación de un contacto
  const handleDeleteContact = (contactId) => {
    // Filtramos los contactos para eliminar el contacto con el ID proporcionado
    const updatedContacts = storeContacts.filter(c => c.id !== contactId);
    // Actualizamos el estado local con los contactos actualizados
    setStoreContacts(updatedContacts);

    // Filtramos los contactos favoritos para eliminar cualquier referencia al contacto eliminado
    const updatedFavoriteContacts = storeFavoriteContacts.filter(c => c.id !== contactId);
    // Actualizamos el estado local de los contactos favoritos
    setStoreFavoriteContacts(updatedFavoriteContacts);

    // Disparamos una acción de Redux para eliminar el contacto del estado global del store
    store.dispatch({ type: 'DELETE_CONTACT', payload: { id: contactId } });
  };

  // Función para manejar la adición de un contacto a favoritos
  const handleAddToFavorites = (contact) => {
    // Actualizamos el estado local de los contactos favoritos con el nuevo contacto agregado
    setStoreFavoriteContacts([...storeFavoriteContacts, contact]);
    // Disparamos una acción de Redux para actualizar el estado global del store
    store.dispatch({ type: 'ADD_TO_FAVORITES', payload: contact });
  };

  // Función para manejar la eliminación de un contacto de favoritos
  const handleRemoveFromFavorites = (contactId) => {
    // Filtramos los contactos favoritos para eliminar el contacto con el ID proporcionado
    const updatedFavoriteContacts = storeFavoriteContacts.filter(c => c.id !== contactId);
    // Actualizamos el estado local de los contactos favoritos
    setStoreFavoriteContacts(updatedFavoriteContacts);
    // Disparamos una acción de Redux para actualizar el estado global del store
    store.dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { id: contactId } });
  };

  // Función para manejar la eliminación de un contacto favorito
  const handleDeleteFavorite = (contact) => {
    // Filtramos los contactos favoritos para eliminar el contacto con el ID proporcionado
    const updatedFavoriteContacts = storeFavoriteContacts.filter(c => c.id !== contact.id);
    // Actualizamos el estado local de los contactos favoritos
    setStoreFavoriteContacts(updatedFavoriteContacts);
    // Disparamos una acción de Redux para actualizar el estado global del store
    store.dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { id: contact.id } });
  };

  // Renderizamos el componente principal de la aplicación, proporcionando el store a través de Provider de React Redux
  return (
    <Provider store={store}>
      <div className="App">
        {/* Renderizamos el componente Navbar */}
        <Navbar />
        {/* Definimos las rutas de la aplicación y sus respectivos componentes */}
        <Routes>
          <Route path="/favorites" element={<Favorites favoriteContacts={storeFavoriteContacts} deleteFavorite={handleDeleteFavorite} />} />
          <Route path="/new" element={<New onAddContact={handleAddContact} onAddToFavorites={handleAddToFavorites} />} />
          <Route path="/" element={<Overview contacts={storeContacts} favoriteContacts={storeFavoriteContacts} onAddToFavorites={handleAddToFavorites} onDeleteContact={handleDeleteContact} onDeleteFavorite={handleDeleteFavorite} />} />
          <Route path="/contact" element={<Contact contacts={storeContacts} onAddToFavorites={handleAddToFavorites} onDeleteContact={handleDeleteContact} />} />
        </Routes>
      </div>
    </Provider>
  );
};


export default App;
