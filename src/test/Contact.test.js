import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Contact } from '../components/pages/contact/Contact'

describe('Contact Component', () => {
  const contacts = [
    {
      firstName: 'Janet',
      lastName: 'Weaver',
      email: 'janet.weaver@reqres.in',
      avatar: 'avatar-url-1',
    },
    {
      firstName: 'George',
      lastName: 'Bluth',
      email: 'george.bluth@reqres.in',
      avatar: 'avatar-url-2',
    },
  ];

  it('renders contact information correctly', async () => {
    render(
      <Contact
        contacts={contacts}
        onAddToFavorites={() => {}}
        onDeleteContact={() => {}}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Janet Weaver')).toBeInTheDocument();
      expect(screen.getByText('janet.weaver@reqres.in')).toBeInTheDocument();
      expect(screen.getByText('George Bluth')).toBeInTheDocument();
      expect(screen.getByText('george.bluth@reqres.in')).toBeInTheDocument();
    });
  });

  it('handles deleting contact', async () => {
    const deleteContactMock = jest.fn();
  
    render(
      <Contact
        contacts={contacts}
        onAddToFavorites={() => {}}
        onDeleteContact={deleteContactMock}
      />
    );
  
    // Esperamos a que los elementos se rendericen completamente
    await waitFor(() => {
      fireEvent.click(screen.getAllByAltText('Delete')[1]); // Eliminar el segundo contacto
    });
  
    expect(deleteContactMock).toHaveBeenCalledTimes(1);
    expect(deleteContactMock).toHaveBeenCalledWith(1); // Se espera que el índice sea 1 para el segundo contacto
  });
  
  
});
