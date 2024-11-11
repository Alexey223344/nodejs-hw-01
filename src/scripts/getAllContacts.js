import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
 return JSON.parse(contacts);
  } catch (error) {
   throw new Error(error.message);
  }
};

console.log(await getAllContacts());
