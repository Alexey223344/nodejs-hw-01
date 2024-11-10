import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(`error to take contacts: ${error.message}`);
    throw error;
  }
};


getAllContacts()
  .then((contacts) => console.log(contacts))
  .catch((error) => console.error(`error: ${error.message}`));
