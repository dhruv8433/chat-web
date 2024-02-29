"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  const user = result.user.reloadUserInfo;
  return user;
};
