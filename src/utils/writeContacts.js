import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();
    const userData = Array.isArray(data) ? data : JSON.parse(data) || [];
    
    const contactsToAdd = Array.isArray(updatedContacts) ? updatedContacts : [updatedContacts];
    userData.push(...contactsToAdd);

    await fs.writeFile(PATH_DB, JSON.stringify(userData, null, 2));
  } catch (error) {
    console.error(`error to edit: ${error.message}`);
    throw new Error(error.message);
  }
};