"use client";
import React from "react";
import Cookies from "js-cookie";
import { auth } from "../firebase";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import { Divider } from "@mui/material";
import { signOut } from "firebase/auth";
import MyButton from "../common/MyButton";
import { useDispatch } from "react-redux";
import { logoutuser } from "../action/action";

const LogoutModel = ({ setLogoutDialogOpen }) => {
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logoutuser());
      Cookies.remove("user");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {/* TODO -> REDESIGN it and look user friendly */}
      <MyBox className={"p-4 rounded-2xl"}>
        <MyText className={"text-2xl"}>Logout</MyText>
        <Divider />
        <MyText className={"mt-4"}>
          Are you sure , Do you want to logout ?
        </MyText>

        {/* action buttons */}
        <div className="flex justify-end m-3 gap-2">
          <MyButton
            myFunction={() => setLogoutDialogOpen(false)}
            isPrimaryButton={false}
            customBgColor={"gray"}
            className={"px-1 py-2 rounded-lg"}
          >
            Cancel
          </MyButton>

          {/* action -- logout */}
          <MyButton
            isPrimaryButton={false}
            customBgColor={"red"}
            className={"p-1 rounded-lg"}
            myFunction={() => logOut()}
          >
            Logout
          </MyButton>
        </div>
      </MyBox>
    </div>
  );
};

export default LogoutModel;
