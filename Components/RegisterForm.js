"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { headers } from "@/next.config";
import { useRouter } from "next/navigation";
function RegisterForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const router = useRouter();
  const handler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      seterror("All fields are necesarry.");
      return;
    }
    try {
      const resUserExists = await fetch("api/UserExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { USER } = await resUserExists.json();

      if (USER) {
        seterror("User already exists");
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h2 className="text-xl font-bold my-4"> Register </h2>{" "}
          <form onSubmit={handler} className="flex flex-col gap-3">
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
              Register{" "}
            </button>{" "}
          </form>{" "}
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1  px-3 rounded-md mt-4">
              {" "}
              {error}{" "}
            </div>
          )}{" "}
          <Link className="text-sm mt-3 text-right" href="/">
            Already Have an account ?
            <span className="underline mx-1">Login</span>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default RegisterForm;
