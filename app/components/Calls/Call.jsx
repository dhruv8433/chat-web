import Options from "@/app/common/Options";
import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
const Call = () => {
  return (
    <div className="min-h-[770px] mt-4 primary border border-black rounded-2xl">
      <div className="p-2 ">
        <Options
          OptionIcon={PhoneOutlinedIcon}
          title={"#Partner"}
          callPage={true}
        />
        <Options
          OptionIcon={PhoneOutlinedIcon}
          title={"User1"}
          callPage={true}
        />
        <Options
          OptionIcon={PhoneOutlinedIcon}
          title={"Temp-Test"}
          callPage={true}
        />
      </div>
    </div>
  );
};

export default Call;
