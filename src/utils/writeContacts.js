import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();
    const userData = data ? JSON.parse(data) : [];

    if (updatedContacts.length) {
      userData.push(...updatedContacts);
    } else {
      userData.push(updatedContacts);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(userData, null, 2));
  } catch (error) {
    throw new Error(error.message);
  }
};
