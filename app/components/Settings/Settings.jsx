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
import Link from "next/link";
import { useSelector } from "react-redux";

const Settings = ({ posts }) => {
 
  return (
    <MyBox isPrimary={true} className="min-h-[100%] rounded-2xl">
      <div className="p-2 ">
        {/* Profile */}
        <Link href={`/settings/profile/${posts}`}>

          <Options OptionIcon={PersonOutlineIcon} title={"Profile"} />
        </Link>
        <Divider />

        {/* your activity */}
        <Link href='/settings/activities'>

          <Options OptionIcon={UpdateIcon} title={"Your Activity"} />
        </Link>
        <Divider />
        {/* Archived */}
        <Link href='/settings/archived'>

          <Options OptionIcon={HistoryIcon} title={"Archived"} /></Link>
        <Divider />

        {/* Saved */}
        <Link href='/settings/saved'>

          <Options OptionIcon={BookmarkBorderIcon} title={"Saved"} /></Link>
        <Divider />

        {/* Supervision */}
        <Link href='/settings/supervision'>

          <Options
            OptionIcon={SupervisorAccountOutlinedIcon}
            title={"Supervision"}
          /></Link>
        <Divider />

        {/* Verified */}
        <Link href='/settings/verified'>
          <Options OptionIcon={CheckCircleOutlinedIcon} title={"Verified"} /></Link>
        <Divider />

        {/* Close Friends */}
        <Link href='/settings/closed-friends'>
          <Options
            OptionIcon={StarBorderPurple500OutlinedIcon}
            title={"Close Friends"}
          /></Link>
      </div>
    </MyBox>
  );
};

export default Settings;
