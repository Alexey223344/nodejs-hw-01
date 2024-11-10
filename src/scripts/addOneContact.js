import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    await writeContacts(newContact);
  } catch (error) {
    console.error(`Error adding contact: ${error.message}`);
    throw error;
  }
};

addOneContact();
