import React, { useState } from "react";
import Title from "../../../../Component/common/Title";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Question2 = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
      <div>
        <div className="px-20">
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What payment methods can I offer my customers?
            </AccordionHeader>
            <AccordionBody className="text-xl font-thin">
              Your customers will appreciate having the flexibility to choose
              their preferred payment method.
              <br /> You can offer them the choice of PayPal, direct debit or
              credit card.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How many products can I sell in my online shop?
            </AccordionHeader>
            <AccordionBody className="text-xl font-thin">
              Jimdo’s online shops are ideal for up to 100 products. You can
              offer different variants of the same
              <br /> product—different colors, sizes, etc. The intuitive design
              of our product pages makes it easy to
              <br /> present all the important information about your items in
              one clear place, to make sure your
              <br /> customers always have the overview they need.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Are there any transaction fees?
            </AccordionHeader>
            <AccordionBody className="text-xl font-thin">
              The best part about selling items on your own online shop is that
              all your profits are yours. Jimdo
              <br /> doesn’t charge any commission. You just pay for your
              website plan.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              How easy is it to sell online?
            </AccordionHeader>
            <AccordionBody className="text-xl font-thin">
              Jimdo is perfect for first-time sellers. We have all the features
              you need to get started. Just snap a<br /> product photo, fill in
              the details, add your payment info and you’re ready to start
              taking orders.
              <br /> You can choose the plan that's right for you, depending on
              the shop features you need.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Question2;
