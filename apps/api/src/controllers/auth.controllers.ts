import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try{
    const { email, password } = req.body;
    const newUser: PlatformUser = {
      id: null,
      email,
      password
    };
    // please finish this function
    
    const someUser = await createUser(newUser)

    res.status(201).json({
        user: {
          id: someUser.id,
          email: someUser.email,
        },
      })
  }
  catch(error){
    res.status(400).json({ message: error instanceof Error ? error.message : "Failed to create user" })

    }
};