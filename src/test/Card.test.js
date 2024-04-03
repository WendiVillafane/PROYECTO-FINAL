import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../components/pages/card/Card';

describe('Card component', () => {
  const contact = {
    firstName: 'Janet',
    lastName: 'Weaver',
    email: 'janet.weaver@reqres.in',
    avatar: 'https://example.com/avatar.jpg',
  };

  it('renders card with contact information', () => {
    const { getByText, getByAltText } = render(<Card contact={contact} />);
    
    expect(getByText('Janet Weaver')).toBeInTheDocument();
    expect(getByText('janet.weaver@reqres.in')).toBeInTheDocument();
    expect(getByAltText('Janet Weaver')).toBeInTheDocument();
  });

  it('calls onAddToFavorites callback when add to favorites button is clicked', () => {
    const onAddToFavorites = jest.fn();
    const { getByAltText } = render(<Card contact={contact} onAddToFavorites={onAddToFavorites} />);
    const addToFavoritesButton = getByAltText('Add to Favorites');

    fireEvent.click(addToFavoritesButton);

    expect(onAddToFavorites).toHaveBeenCalledWith(contact);
  });

  it('calls onDeleteContact callback when delete button is clicked', () => {
    const onDeleteContact = jest.fn();
    const { getByAltText } = render(<Card contact={contact} onDeleteContact={onDeleteContact} />);
    const deleteButton = getByAltText('Delete');

    fireEvent.click(deleteButton);

    expect(onDeleteContact).toHaveBeenCalled();
  });
});
