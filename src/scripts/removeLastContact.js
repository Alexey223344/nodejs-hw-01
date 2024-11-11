import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { countContacts } from './countContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  try {
    const usData = await getAllContacts();
    const numberContacts = await countContacts();

    if (numberContacts > 0) {
      const update = usData.slice(0, numberContacts - 1);
      await fs.writeFile(PATH_DB, JSON.stringify(update, null, 2));
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

removeLastContact();
