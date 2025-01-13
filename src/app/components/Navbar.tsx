"use client";

import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const account = useActiveAccount();
  const [isNavDialogVisible, setIsNavDialogVisible] = useState(false);

  function handleMenu() {
    setIsNavDialogVisible(!isNavDialogVisible);
  }

  return (
    <nav className="bg-slate-100 border-b-2 border-b-slate-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Menu Button for Mobiles */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
              aria-controls="mobile-menu"
              aria-expanded={isNavDialogVisible}
            >
              <span className="sr-only">Open main menu</span>
              {isNavDialogVisible ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo & Main Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image src="./fundme.svg" alt="Fundme" width="150" height="60" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href={"/"}>
                  <p className="rounded-md px-3 py-2 text-lg font-medium mt-3 text-slate-700">
                    Campaigns
                  </p>
                </Link>
                {account && (
                  <Link href={`/dashboard/${account?.address}`}>
                    <p className="rounded-md px-3 py-2 text-lg font-medium mt-3 text-slate-700">
                      Dashboard
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ConnectButton
              client={client}
              theme={lightTheme()}
              detailsButton={{
                style: {
                  maxHeight: "50px",
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      {isNavDialogVisible && (
        <div
          id="mobile-menu"
          className="sm:hidden bg-slate-100 border-t border-slate-300"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href={"/"}>
              <p className="block rounded-md px-3 py-2 text-lg font-medium text-slate-700">
                Campaigns
              </p>
            </Link>
            {account && (
              <Link href={`/dashboard/${account?.address}`}>
                <p className="block rounded-md px-3 py-2 text-lg font-medium text-slate-700">
                  Dashboard
                </p>
              </Link>
            )}
            
            {/* Wallet connect button for mobile */}
            <div className="px-3 py-2">
              <ConnectButton
                client={client}
                theme={lightTheme()}
                detailsButton={{
                  style: {
                    width: "100%",
                    maxHeight: "50px",
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;