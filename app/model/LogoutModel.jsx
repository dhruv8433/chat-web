import { Button, Divider, Modal, Box } from "@mui/material";
import React from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import { handleSignOut } from "../authContext";

const LogoutModel = ({ setLogoutDialogOpen }) => {
  return (
    <MyBox className={"p-4 rounded-2xl"}>
      <MyText className={"text-2xl"}>Logout</MyText>
      <Divider />
      <MyText className={"mt-4"}>Are you sure , Do you want to logout ?</MyText>

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
          myFunction={() => handleSignOut()}
        >
          Logout
        </MyButton>
      </div>
    </MyBox>
  );
};

export default LogoutModel;
