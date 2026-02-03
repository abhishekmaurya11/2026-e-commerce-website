import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    
    // Path to your JSON file
    const filePath = path.join(process.cwd(), 'submissions.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(fileContent);

    // Check if user exists
    const userFound = users.find(u => u.name === name && u.email === email);

    if (userFound) {
      return NextResponse.json({ success: true, message: "Success Login" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid user" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "File not found" }, { status: 500 });
  }
}