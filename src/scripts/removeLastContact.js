import { countContacts } from './countContacts.js';
import { getAllContacts } from './getAllContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


const writeContacts = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

export const removeLastContact = async () => {
  try {
    const allContacts = await getAllContacts();
    const contactCount = await countContacts();

    if (contactCount > 0) {
    
      const updatedContacts = allContacts.slice(0, -1);
      await writeContacts(updatedContacts);
    }
  } catch (error) {
    console.error(`erorr to delete contact: ${error.message}`);
    throw new Error(error.message);
  }
};


removeLastContact();