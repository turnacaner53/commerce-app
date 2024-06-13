'use server';

import { signIn, signOut } from "@/auth";

export async function getAllProducts() {
  try {
    const result = await fetch('https://dummyjson.com/products', {
      method: 'GET',
      cache: 'no-store',
    });
    const data = await result.json();

    return {
      status: true,
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: 'Something went wrong!',
    };
  }
}

export async function getProductById(id) {
  try {
    const result = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'GET',
      cache: 'no-store',
    });
    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: 'Something went wrong!',
    };
  }
}

export async function login(){
  await signIn('github');
}

export async function logout(){
  await signOut();
}