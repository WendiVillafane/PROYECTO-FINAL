import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Overview } from '../components/pages/overview/Overview';

// Mock para los archivos CSS
jest.mock('../pages/overview/Overview.css', () => ({}));

describe('Overview Component', () => {
  const favoriteContacts = [
    {
      firstName: 'Emma',
      lastName: 'Wong',
      email: 'emma.wong@reqres.in',
      avatar: 'avatar3.jpg',
    },
  ];

  it('calls onDeleteContact when "Delete" button is clicked', () => {
    const mockDeleteContact = jest.fn();

    render(
      <Overview
        contacts={[]}
        favoriteContacts={favoriteContacts}
        onAddToFavorites={() => {}}
        onDeleteContact={mockDeleteContact}
      />
    );

    // Buscamos el botón "Delete" dentro de la tarjeta de contacto
    const deleteButton = screen.getByAltText('Delete');

    // Hacemos clic en el botón "Delete"
    fireEvent.click(deleteButton);

    // Verificamos que la función mockDeleteContact se haya llamado una vez
    expect(mockDeleteContact).toHaveBeenCalledTimes(1);
    // Verificamos que la función mockDeleteContact se haya llamado con el contacto correcto
    expect(mockDeleteContact).toHaveBeenCalledWith(favoriteContacts[0]);
  });
});
