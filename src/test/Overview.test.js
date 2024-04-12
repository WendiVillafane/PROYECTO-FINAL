import React from 'react'; 
import { render, screen } from '@testing-library/react'; 
import { Overview } from '../components/pages/overview/Overview'; 
// Mock de los estilos CSS del componente Overview
jest.mock('../pages/overview/Overview.css', () => ({}));

describe('Overview Component', () => {
  // Definimos una lista de contactos favoritos de ejemplo para utilizar en la prueba
  const favoriteContacts = [
    {
      firstName: 'Emma',
      lastName: 'Wong',
      email: 'emma.wong@reqres.in',
      avatar: 'avatar3.jpg',
    },
  ];

  // Prueba para verificar si el componente Overview se renderiza correctamente
  it('renders Overview component correctly', () => {
    // Renderizamos el componente Overview con una lista vacía de contactos y la lista de contactos favoritos de ejemplo
    render(
      <Overview
        contacts={[]}
        favoriteContacts={favoriteContacts}
        onAddToFavorites={() => {}}
        onDeleteContact={() => {}}
      />
    );

    // Verificamos que el nombre "Emma Wong" esté presente en la pantalla
    expect(screen.getByText('Emma Wong')).toBeInTheDocument();
  });
});
