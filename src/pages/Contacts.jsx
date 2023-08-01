import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddContactForm from 'components/AddContactForm/AddContactForm';
import Loader from 'components/Loader/Loader';

import withAuthRedirect from 'HOC/withAuthRedirect';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const contacts = useSelector(state => state.phonebook.contacts);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);

  useEffect(() => {
    if (!userData) return;

    dispatch(fetchContacts());
  }, [dispatch, userData]);

  const handleDeleteContact = contactId => {
    // CTRL + SHIFT + L
    dispatch(deleteContact(contactId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  const showEmptyContactsMessage =
    Array.isArray(contacts) && contacts.length === 0 && !isLoading;
  return (
    <div>
      <h1>Contacts</h1>
      <AddContactForm />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <p>
                  <b>{contact.name}</b> : {contact.number}{' '}
                  <button
                    disabled={isLoading}
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                    &times;
                  </button>
                </p>
              </li>
            );
          })}
      </ul>
      {showEmptyContactsMessage && (
        <h2>There are no contacts added to your list!</h2>
      )}
    </div>
  );
};

export default withAuthRedirect(Contacts);
