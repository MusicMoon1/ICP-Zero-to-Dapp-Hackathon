import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Link } from "wouter";
export default function FooterAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <>
      <Accordion
        className=" w-full"
        open={open === 1}
        animate={customAnimation}
      >
        <AccordionHeader
          className=" text-white hover:text-white text-sm border-0 uppercase flex justify-between items-center w-full"
          onClick={() => handleOpen(1)}
        >
          Stacks
          <div className=" w-full flex justify-end items-center">
            <Icon icon="eva:arrow-ios-downward-outline" />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-inside space-y-4 font-semibold text-light-neutral">
            <li>
              <Link href="/search" className="transition hover:text-primary">
                Discover
              </Link>
            </li>
            <li>
              <Link
                href="/connect-wallet"
                className="transition hover:text-primary"
              >
                Connect Wallet
              </Link>
            </li>
            <li>
              <Link href="/create" className="transition hover:text-primary">
                Create item
              </Link>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader
          className=" text-white hover:text-white border-0 text-sm uppercase flex justify-between items-center w-full"
          onClick={() => handleOpen(2)}
        >
          Info
          <div className=" w-full flex justify-end items-center">
            <Icon icon="eva:arrow-ios-downward-outline" />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-inside font-semibold space-y-4 text-light-neutral">
            <li>
              <a href="#" className="transition hover:text-primary">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Demo
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Support
              </a>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  );
}
