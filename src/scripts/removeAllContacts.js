import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const emptyArray = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyArray));
  } catch (error) {
    console.error(`Failed to clear contacts: ${error.message}`);
    throw error;
  }
};


removeAllContacts();