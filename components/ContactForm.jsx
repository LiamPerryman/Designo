import { useState } from "react";
import SubmitButton from "./SubmitButton";
import circle from "../assets/contact/desktop/bg-pattern-hero-desktop.svg";
function ContactForm() {
  const [submit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${circle})`,
      }}
      className=" flex flex-col lg:flex-row  items-center bg-peach h-[764px] md:h-[711px] lg:h-[480px] md:rounded-2xl py-[72px]  px-6 mb-[120px] lg:mb-40 text-white md:px-14 md:py-16  lg:py-32 lg:px-24 md:bg-[left_-5rem_top_-3.5rem] lg:bg-[left_top_-10rem] bg-top bg-no-repeat max-sm:bg-repeat-x  max-sm:bg-[length:232px_232px] transition-all ease-in-out du "
    >
      {!submit ? (
        <>
          {" "}
          <div className="flex flex-col mb-12   ">
            <h1 className=" text-[32px] mb-6 text-center md:text-left">Contact Us</h1>
            <p className="text-base text-center md:text-left  lg:pr-36 ">
              Ready to take it to the next level? Let’s talk about your project or idea and find out
              how we can help your business grow. If you are looking for unique digital experiences
              that’s relatable to your users, drop us a line.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full  items-center ">
            <input
              required
              className=" bg-transparent w-full border-b border-white placeholder-white placeholder:opacity-50  pt-6 pb-2  outline-none"
              type="text"
              placeholder="Full Name"
            />
            <input
              required
              className="bg-transparent w-full border-b border-white  placeholder-white placeholder:opacity-50 pt-6 pb-2 outline-none"
              type="email"
              placeholder="Email Address"
            />
            <input
              required
              className="bg-transparent w-full border-b placeholder-white placeholder:opacity-50  pt-6 pb-2   outline-none"
              type="tel"
              placeholder="Phone Number"
              minLength={9}
            />
            <textarea
              required
              className="bg-transparent w-full border-b placeholder-white placeholder:opacity-50  pt-6 pb-20 outline-none shadow-none   mb-10 md:mb-6"
              placeholder="Your Message"
            />
            <div className="flex justify-center sm:justify-end w-full">
              <SubmitButton handler={(e) => handleSubmit(e)} />
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col w-full h-full text-center justify-center items-center">
          <h1 className=" text-4xl md:text-6xl mb-8">Thanks for you inquiry!</h1>
          <p className="text-xl md:text-2xl"> Our Team will be in contact with you soon.</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
