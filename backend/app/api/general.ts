import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { NextResponse } from "next/server";

export const prisma = new PrismaClient();

// Buat Response untuk "User tidak ditemukan"



export const getResponseUserNotFound = NextResponse.json(
  {
    metaData: {
      error: 1,
      message: process.env.USER_NOT_FOUND_MESSAGE,
      status: 404,
    },
  },
  {
    status: 404,
  }
);

export const getResponseUserAlreadyExists = NextResponse.json(
  {
    metaData: {
      error: 1,
      message: process.env.USER_ALREADY_EXISTS_MESSAGE,
      status: 409,
    },
  },
  {
    status: 409,
  }
);