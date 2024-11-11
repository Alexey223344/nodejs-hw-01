import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const users = await getAllContacts();
    const newUser = users.length;
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

console.log(await countContacts());
