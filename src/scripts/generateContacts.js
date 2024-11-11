import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const generateUsers = Array.from({ length: number + 1 }, () => createFakeContact());
    await writeContacts(generateUsers);
  } catch (error) {
    throw new Error(error.message);
  }
};

generateContacts(5);