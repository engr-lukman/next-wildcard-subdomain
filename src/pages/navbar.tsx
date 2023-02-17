import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [subdomain, setSubdomain] = useState("main");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const subdomain = getSubdomain(window.location.host);
      console.log({ subdomain });

      setSubdomain(subdomain);
    }
  }, [router.pathname]);

  const getSubdomain = (url: string) => {
    let domain = url;
    if (url.includes("://")) {
      domain = url.split("://")[1];
    }
    const subdomain = domain.split(".")[0];
    return subdomain;
  };

  return (
    <div>
      <h3 className="text-xl">
        Your current subdomain is:{" "}
        <a href="#" className="text-red-700">
          {subdomain}
        </a>
      </h3>
      <ul className="list-disc space-y-5 ml-10 mt-5">
        {["admin", "viva", "sub1"].map((sub) => (
          <div key={Math.random()}>
            <li>
              Subdomain: <span className="text-red-700">{sub}</span>
              <ul className="ml-10 flex justify-start items-center space-x-5">
                <li>
                  <Link href={`http://${sub}.lvh.me:3000`} passHref>
                    <span className="underline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href={`http://${sub}.lvh.me:3000/about`} passHref>
                    <span className="underline">About</span>
                  </Link>
                </li>
                <li>
                  <Link href={`http://${sub}.lvh.me:3000/contact`} passHref>
                    <span className="underline">Contact</span>
                  </Link>
                </li>
              </ul>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
