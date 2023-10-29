"use client";
import React from "react";
import { signOut } from "next-auth/react";
function User() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">John</span>
        </div>
        <div>
          Email: <span className="font-bold">John@gmail.com</span>
        </div>
        <button
          onClick={() => signOut()}
          className="h-10 bg-red-500 text-white font-bold  mx-3 my-1 mt-3 rounded"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default User;
