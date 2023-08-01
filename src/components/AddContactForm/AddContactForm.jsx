import Button from 'components/Button/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsReducer';

const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const elements = evt.currentTarget.elements;
    const name = elements.contactName.value;
    const number = elements.contactNumber.value;

    dispatch(addContact({ name, number }));
    evt.currentTarget.reset();
  };

  return (
    <div>
      <h2>Add contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Name: </b>
          <input type="text" name="contactName" required />
        </label>
        <br />
        <label>
          <b>Number: </b>
          <input type="text" name="contactNumber" required />
        </label>
        <br />
        <Button variant="secondary">Add contact</Button>
      </form>
    </div>
  );
};

export default AddContactForm;
