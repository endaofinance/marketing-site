import * as React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import BrandMark from "../assets/svg/brand-mark.svg";

interface NavLink {
  name: string;
  href: string;
}

interface Props {
  navigation: NavLink[];
  appButtonEnabled: boolean;
}

const AppButtons = ({ enabled }: { enabled: boolean }) => {
  if (!enabled) {
    return null;
  }
  return (
    <div className="hidden md:flex md:items-center md:space-x-6">
      <OutboundLink
        href="https://app.endao.finance"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
      >
        App
      </OutboundLink>
    </div>
  );
};

const Nav = ({
  navigation = [],
  appButtonEnabled,
}: {
  navigation: NavLink[];
  appButtonEnabled: boolean;
}) => {
  return (
    <Popover as="header" className="relative">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Endao</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={BrandMark}
                  alt="Endao Mark"
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <AppButtons enabled={appButtonEnabled} />
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={BrandMark} alt="Endao Mark" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <OutboundLink
                  href="https://app.endao.finance"
                  className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  App
                </OutboundLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default function ({ navigation, appButtonEnabled }: Props) {
  return (
    <div className="relative overflow-hidden">
      <Nav navigation={navigation} appButtonEnabled={appButtonEnabled} />
      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-1 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-center lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Permanent funding</span>
                    <span className="block text-indigo-400">
                      using the power of DeFi
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Endao allows you to direct the yield generated from
                    DeFi/Staking to projects or people that you want to support.
                  </p>
                </div>
                <div className="pt-7 md:hidden lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
