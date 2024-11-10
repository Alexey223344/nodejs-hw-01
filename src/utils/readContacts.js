import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = () =>
  fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => JSON.parse(data))
    .catch((error) => {
      throw new Error(`error to read: ${error.message}`);
    });
