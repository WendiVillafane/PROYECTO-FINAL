import React from 'react'; 
import { render, fireEvent, screen } from '@testing-library/react'; 
import { Contact } from '../components/pages/contact/Contact'; 

describe('Contact Component', () => {
  // Definimos una lista de contactos de ejemplo para utilizar en la prueba
  const contacts = [
    {
      id: 1,
      firstName: 'Janet',
      lastName: 'Weaver',
      email: 'janet.weaver@reqres.in',
      avatar: 'avatar-url-1',
    },
    {
      id: 2,
      firstName: 'George',
      lastName: 'Bluth',
      email: 'george.bluth@reqres.in',
      avatar: 'avatar-url-2',
    },
  ];

  // Prueba para verificar si se maneja correctamente el borrado de un contacto
  it('handles deleting contact', () => {
    // Creamos una función mock (simulada) para onDeleteContact
    const deleteContactMock = jest.fn();

    // Renderizamos el componente Contact con la lista de contactos y la función mock onDeleteContact
    render(
      <Contact
        contacts={contacts}
        onAddToFavorites={() => {}}
        onDeleteContact={deleteContactMock}
      />
    );

    // Buscamos el botón "Delete" del primer contacto en la pantalla
    const deleteButton = screen.getAllByAltText('Delete')[0];

    // Simulamos hacer clic en el botón "Delete"
    fireEvent.click(deleteButton);

    // Verificamos que la función mock onDeleteContact se haya llamado una vez
    expect(deleteContactMock).toHaveBeenCalledTimes(1);
    // Verificamos que la función mock onDeleteContact se haya llamado con el ID correcto del contacto
    expect(deleteContactMock).toHaveBeenCalledWith(contacts[0].id);
  });
});
