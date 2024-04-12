import { configureStore } from '@reduxjs/toolkit'; //

const initialState = {
  contacts: [], // Inicializamos el estado de los contactos como un array vacío
  favoriteContacts: [] // Inicializamos el estado de los contactos favoritos como un array vacío
};

// Definimos el reducer, una función que recibe el estado actual y una acción, y devuelve un nuevo estado
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload] // Agrega un nuevo contacto al estado de contactos
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload.id), // Elimina un contacto del estado de contactos
        favoriteContacts: state.favoriteContacts.filter(contact => contact.id !== action.payload.id) // Elimina un contacto del estado de contactos favoritos
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteContacts: [...state.favoriteContacts, action.payload] // Agrega un nuevo contacto a la lista de contactos favoritos
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favoriteContacts: state.favoriteContacts.filter(contact => contact.id !== action.payload.id) // Elimina un contacto de la lista de contactos favoritos
      };
    default:
      return state; // Devuelve el estado actual si la acción no coincide con ninguna de las anteriores
  }
};

// Configuramos el almacenamiento de Redux con el reducer definido
const store = configureStore({
  reducer: rootReducer, // Pasamos el reducer a configureStore
  // Otros parámetros opcionales como middleware, enhancers, etc.
});

export default store; // Exportamos el almacenamiento configurado
