import Options from "@/app/common/Options";
import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MyBox from "@/app/common/MyBox";
const Call = () => {
  return (
    <MyBox isPrimary={true} className="min-h-[770px] mt-4 rounded-2xl">
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
    </MyBox>
  );
};

export default Call;
