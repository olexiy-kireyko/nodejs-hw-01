import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const content = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.log(error);
  }
};
