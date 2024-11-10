import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const users = await getAllContacts();
    return users.length;
  } catch (error) {
    console.error(`Error counting contacts: ${error.message}`);
    throw error;
  }
};

console.log(await countContacts());
