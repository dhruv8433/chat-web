import React from "react";
import Options from "@/app/common/Options";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import UpdateIcon from '@mui/icons-material/Update';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import Link from "next/link";

const Settings = () => {
  return (
    <div className="min-h-[770px] primary border border-black rounded-2xl">
      <div className="p-2 ">
        {/* Profile */}
        <Options OptionIcon={PersonOutlineIcon} title={"Profile"} />
        {/* your activity */}
        <Options OptionIcon={UpdateIcon} title={"Your Activity"} />
        {/* Archived */}
        <Options OptionIcon={HistoryIcon} title={"Archived"} />
        {/* Saved */}
        <Options OptionIcon={BookmarkBorderIcon} title={"Saved"} />
        {/* Supervision */}
        <Options OptionIcon={SupervisorAccountOutlinedIcon} title={"Supervision"} />
        {/* Verified */}
        <Options OptionIcon={CheckCircleOutlinedIcon} title={"Verified"} />
        {/* Close Friends */}
        <Options OptionIcon={StarBorderPurple500OutlinedIcon} title={"Close Friends"} />
      </div>
    </div>
  );
};

export default Settings;
