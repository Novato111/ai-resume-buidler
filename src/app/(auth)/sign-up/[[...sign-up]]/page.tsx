import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen items-center">
      <SignUp></SignUp>
    </main>
  );
};

export default page;
