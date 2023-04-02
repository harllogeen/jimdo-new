import React from "react";
import PrimaryButton from "../../../../Component/common/PrimaryButton";

const DayByDayWebsite = () => {
  return (
    <div className="bg-fcNavy3 items-center grid justify-center mx-auto py-12 ">
      <div className="">
        <p className="text-center text-white font-semibold text-xl">
        Love your website from Day One
        </p>
      </div>
      <PrimaryButton className="CreateWebsiteTodayBtn">
        Let's get started
      </PrimaryButton>
    </div>
  );
};

export default DayByDayWebsite;
