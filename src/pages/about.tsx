import type { NextPage } from "next";
import Navbar from "./navbar";

const About: NextPage = () => {
  return (
    <div className="w-1/2 mx-auto py-10">
      <h1 className="text-3xl my-10">Next.js wildcard subdomain | About</h1>

      <div className="mt-10">
        <Navbar />
      </div>
    </div>
  );
};

export default About;
