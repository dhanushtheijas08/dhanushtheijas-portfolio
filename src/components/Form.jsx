import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const EMAILJSINFO = {
  serviceId: "service_9mb1mbb",
  templateId: "template_nubm406",
  publicKey: "pRmJdf68nhQ84VqPg",
};

export default function Form() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkValidData = function () {
    // For Mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const gmailPattern = /^[^\s@]+@gmail\.com$/;

    if (
      !(emailPattern.test(details.email) || gmailPattern.test(details.email))
    ) {
      return {
        status: false,
        errorMsg: "Enter a valid email address",
      };
    }

    // For Name
    const trimmedName = details.name.trim();
    if (trimmedName.length < 1) {
      return {
        status: false,
        errorMsg: "Name should not be empty",
      };
    }
    if (trimmedName.length > 30) {
      return {
        status: false,
        errorMsg: "Name should be less than 30 characters",
      };
    }

    // For Message
    const trimmedMsg = details.message.trim();
    if (trimmedMsg.length < 1) {
      return {
        status: false,
        errorMsg: "Message should not be empty",
      };
    }
    if (trimmedMsg.length > 750) {
      return {
        status: false,
        errorMsg: "Message should be less than 750 characters",
      };
    }

    return { status: true };
  };

  const handleFormChange = function (e) {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = function (e) {
    e.preventDefault();

    const isValidData = checkValidData();
    if (!isValidData.status) {
      toast.error(isValidData.errorMsg);
      return;
    }

    toast.promise(
      emailjs.send(
        EMAILJSINFO.serviceId,
        EMAILJSINFO.templateId,
        details,
        EMAILJSINFO.publicKey,
      ),
      {
        loading: "Sending Mail....",
        success: () => {
          return toast.success("Mail Sent Successfully");
        },
        error: (error) => {
          return toast.error("Something Went Wrong");
        },
      },
    );
  };
  return (
    <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          className="welcome-box rounded-md border border-[#7042f88b]  bg-transparent px-2.5 py-2 text-xl text-white outline-none focus:ring focus:ring-[#7347f943] sm:w-1/2"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={details.name}
          onChange={handleFormChange}
        />
        <input
          className="welcome-box rounded-md border border-[#7042f88b]  bg-transparent px-2.5 py-2 text-xl text-white outline-none focus:ring focus:ring-[#7347f943] sm:w-1/2"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={details.email}
          onChange={handleFormChange}
        />
      </div>
      <textarea
        className="z-10 h-44 w-full rounded-md border border-[#7042f88b] bg-transparent px-2 py-2 text-xl text-white outline-none focus:ring focus:ring-[#7347f943]"
        name="message"
        id="message"
        placeholder="Message"
        value={details.message}
        onChange={handleFormChange}
      ></textarea>
      <button className="button-primary rounded-md px-6 py-2  text-xl text-white transition-transform duration-75 active:scale-[.98]">
        Send
      </button>
    </form>
  );
}
