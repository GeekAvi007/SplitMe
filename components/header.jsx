import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b shadow-sm">
      <h1 className="text-xl font-bold text-[#6c47ff]">SplitMe</h1>

      <div className="flex items-center space-x-4">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
