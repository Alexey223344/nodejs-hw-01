import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = Array.from({ length: number }, createFakeContact);
    await writeContacts(contacts);
  } catch (error) {
    console.error(`Error generating contacts: ${error.message}`);
    throw error;
  }
};

generateContacts(5);