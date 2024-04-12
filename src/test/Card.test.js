import React from 'react'; 
import { render, fireEvent } from '@testing-library/react'; 
import Card from '../components/pages/card/Card'; 

describe('Card component', () => {
  // Definimos un contacto de ejemplo para utilizar en las pruebas
  const contact = {
    firstName: 'Janet',
    lastName: 'Weaver',
    email: 'janet.weaver@reqres.in',
    avatar: 'https://example.com/avatar.jpg',
  };

  // Prueba para verificar si el componente renderiza correctamente la información del contacto
  it('renders card with contact information', () => {
    const { getByText, getByAltText } = render(<Card contact={contact} />);
    
    // Verificamos si se renderizan el nombre completo, el correo electrónico y la imagen del contacto
    expect(getByText('Janet Weaver')).toBeInTheDocument();
    expect(getByText('janet.weaver@reqres.in')).toBeInTheDocument();
    expect(getByAltText('Janet Weaver')).toBeInTheDocument();
  });

  // Prueba para verificar si la función onAddToFavorites se llama correctamente cuando se hace clic en el botón de agregar a favoritos
  it('calls onAddToFavorites callback when add to favorites button is clicked', () => {
    // Creamos una función mock (simulada) para onAddToFavorites
    const onAddToFavorites = jest.fn();
    const { getByAltText } = render(<Card contact={contact} onAddToFavorites={onAddToFavorites} />);
    const addToFavoritesButton = getByAltText('Add to Favorites');

    // Simulamos hacer clic en el botón de agregar a favoritos
    fireEvent.click(addToFavoritesButton);

    // Verificamos si la función mock onAddToFavorites se llamó correctamente con el contacto como argumento
    expect(onAddToFavorites).toHaveBeenCalledWith(contact);
  });

  // Prueba para verificar si la función onDeleteContact se llama correctamente cuando se hace clic en el botón de eliminar
  it('calls onDeleteContact callback when delete button is clicked', () => {
    // Creamos una función mock (simulada) para onDeleteContact
    const onDeleteContact = jest.fn();
    const { getByAltText } = render(<Card contact={contact} onDeleteContact={onDeleteContact} />);
    const deleteButton = getByAltText('Delete');

    // Simulamos hacer clic en el botón de eliminar
    fireEvent.click(deleteButton);

    // Verificamos si la función mock onDeleteContact se llamó correctamente
    expect(onDeleteContact).toHaveBeenCalled();
  });
});
