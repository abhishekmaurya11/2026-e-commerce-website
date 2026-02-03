// // app/actions.ts
// 'use server'

// import { promises as fs } from 'fs';
// import path from 'path';
// let data={};
// export default async function Loginfn(formData: FormData) {
//     // 1. Extract data
//      data = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         timestamp: new Date().toISOString(),
//     };

//     const fs = require('fs');

//     try {
//         const data = fs.readFileSync('submissions.json', 'utf8');
//         const jsonObject = JSON.parse(data);
//         jsonObject.map((e : any) => {
//             if (e.name == data.name && e.email == data.email && e.name == 'abhishek' && e.email == 'iamabhishekmaurya1@gmail.com') {
//                 console.log('Login Successful');
//             }
//             console.log(jsonObject.keyName); // Accessing a node
//         } )




//     } catch (err) {
//         console.error('Error reading JSON file:', err);
//     }
// }   





'use server'

import { promises as fs } from 'fs';
import path from 'path';

export  async function Loginfn(formData: FormData) {
    console.log('Login function called');
    // 1. Extract data from form
    const nameInput = formData.get('name') as string;
    const emailInput = formData.get('email') as string;

    // Define path to your JSON file
    const filePath = path.join(process.cwd(), 'submissions.json');

    try {
        // 2. Read the file
        const fileContent = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(fileContent);

        // 3. Check if user exists in the JSON array
        const userFound = users.map((user: any) => 
            user.name === nameInput && user.email === emailInput
        );

        if (userFound) {
            console.log('✅ Login Successful for:', nameInput);
            // You can redirect here using: redirect('/dashboard')
            return { success: true };
        } else {
            console.log('❌ Invalid credentials');
            return { success: false, error: 'User not found' };
        }

    } catch (err) {
        console.error('Error handling login:', err);
        return { success: false, error: 'Server error' };
    }
}