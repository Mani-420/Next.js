import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User.model';
import bcrypt from 'bcryptjs';

import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
import { success } from 'zod/v4';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const {username, email, password} = await request.json()
  } catch (error) {
    console.error('Error Registering User:', error);
    return Response.json(
      {
        success: false,
        message: 'Error Registering User'
      },
      {
        status: 500
      }
    );
  }
}
