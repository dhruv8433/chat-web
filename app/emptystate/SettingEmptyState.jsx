import React from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";

const SettingEmptyState = () => {
  return (
    <MyBox isPrimary={true} className={"p-4 rounded-2xl min-h-[670px] mx-2 flex flex-col justify-center items-center"}>
        <img src="./Setting-empty-state.png" alt="setting-icon" className="text-white h-28 w-28" style={{color: "white"}} />
      <MyText>Select Something To Update Your Setting</MyText>
    </MyBox>
  );
};

export default SettingEmptyState;
