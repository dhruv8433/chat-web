import { Divider } from "@mui/material";
import React from "react";

const LogoutModel = ({ setLogoutDialogOpen }) => {
  return (
    <div className="secondary p-4 rounded-2xl w-80">
      <h1 className="text-2xl chat-name">Logout</h1>
      <Divider className="text-white" />
      <h1 className="mt-2">
        Are you sure you want to logout? Click 'Confirm' to proceed or 'Cancel'
        to stay.
      </h1>

      {/* action buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button
          className="border p-1 rounded "
          onClick={() => setLogoutDialogOpen(false)}
        >
          Cancle
        </button>
        <button className="border p-1 rounded bg-red-500">Loogout</button>
      </div>
    </div>
  );
};

export default LogoutModel;
