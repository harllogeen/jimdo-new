
import React from "react";
import Title from "../../../../Component/common/Title";
import AccordionQuestion from "../Questions/AccordionQuestions"

const Questions = () => {
  return (
    <div className=" mt-10 ">
      <div className="text-center py-14 ">
        <Title>Questions before starting?</Title>
        <p className="text-xl font-thin">
          Compare and find the perfect plan for your website. Take a look at
          what we offer and
          <br /> start creating.
        </p>
      </div>
      <AccordionQuestion />
    </div>
  );
};

export default Questions;
