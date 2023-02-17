import type { NextPage } from "next";
import Navbar from "./navbar";

const Contact: NextPage = () => {
  return (
    <div className="w-1/2 mx-auto py-10">
      <h1 className="text-3xl my-10">Next.js wildcard subdomain | Contact</h1>

      <div className="mt-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Contact;
