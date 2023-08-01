import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactRequest, deleteContactRequest, getContactsRequest } from "services/api";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
      try {
        const contacts = await getContactsRequest();
        return contacts;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (formData, thunkAPI) => {
      try {
        const newContact = await addContactRequest(formData);
  
        return newContact;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const deletedContact = await deleteContactRequest(contactId);
  
        return deletedContact;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );