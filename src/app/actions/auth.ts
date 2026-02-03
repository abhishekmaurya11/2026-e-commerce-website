// app/actions.ts
'use server'

import { promises as fs } from 'fs';
import path from 'path';

export async function submitForm(formData: FormData) {
  // 1. Extract data
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    timestamp: new Date().toISOString(),
  };

  try {
    // 2. Define the file path (saves to the root directory)
    const filePath = path.join(process.cwd(), 'submissions.json');

    // 3. Read existing data or start with an empty array
    let currentData = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      currentData = JSON.parse(fileContent);
    } catch (error) {
      // If file doesn't exist, we start with an empty array
    }

    // 4. Append new submission
    currentData.push(data);

    // 5. Write back to the file
    await fs.writeFile(filePath, JSON.stringify(currentData, null, 2));

    console.log('Successfully saved to JSON file');
  } catch (error) {
    console.error('Error writing to JSON:', error);
  }
}
