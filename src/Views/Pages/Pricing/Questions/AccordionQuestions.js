import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody ,
} from "@material-tailwind/react";

export default function AccordionQuestions() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="px-20">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          I already have a registered domain, can I connect it to my new Jimdo
          website?
        </AccordionHeader>
        <AccordionBody className="text-xl font-thin" >
          Sure! With our premium plans, it's easy to transfer your
          <br /> existing domain to Jimdo, or keep your domain where it is and
          simply connect it to your Jimdo website. When you sign up, be sure to
          add
          <br /> your registered domain and confirm that you are the owner.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Can I start with a free Play website then upgrade my plan later?
        </AccordionHeader>
        <AccordionBody className="text-xl font-thin">
          Yes, you can upgrade at any time. Just click on **Upgrade** in the top
          right-hand corner of your
          <br /> website.
        </AccordionBody>
      </Accordion>
      <Accordion  open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Can I cancel my contract if I change my mind?
        </AccordionHeader>
        <AccordionBody className="text-xl font-thin">
          Of course! If you decide to cancel, you just need to let us know
          within the first 14 days. So there's no
          <br /> risk to you.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          When do I need to pay?
        </AccordionHeader>
        <AccordionBody className="text-xl font-thin">
          You can pay by the month, or save money by paying all at once for a
          12- or 24-month term.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
