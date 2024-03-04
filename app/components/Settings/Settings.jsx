import React from "react";
import Options from "@/app/common/Options";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import UpdateIcon from "@mui/icons-material/Update";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import MyBox from "@/app/common/MyBox";
import { Divider } from "@mui/material";

const Settings = () => {
  return (
    <MyBox isPrimary={true} className="min-h-[770px] rounded-2xl">
      <div className="p-2 ">
        {/* Profile */}
        <Options OptionIcon={PersonOutlineIcon} title={"Profile"} />
        <Divider />

        {/* your activity */}
        <Options OptionIcon={UpdateIcon} title={"Your Activity"} />
        <Divider />

        {/* Archived */}
        <Options OptionIcon={HistoryIcon} title={"Archived"} />
        <Divider />

        {/* Saved */}
        <Options OptionIcon={BookmarkBorderIcon} title={"Saved"} />
        <Divider />

        {/* Supervision */}
        <Options
          OptionIcon={SupervisorAccountOutlinedIcon}
          title={"Supervision"}
        />
        <Divider />

        {/* Verified */}
        <Options OptionIcon={CheckCircleOutlinedIcon} title={"Verified"} />
        <Divider />

        {/* Close Friends */}
        <Options
          OptionIcon={StarBorderPurple500OutlinedIcon}
          title={"Close Friends"}
        />
      </div>
    </MyBox>
  );
};

export default Settings;
