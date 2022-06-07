import * as React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

export default function CTASection() {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Join The Community</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          We are building this in colaboration with our community- join us.
        </p>
        <OutboundLink
          href="https://discord.gg/2zYMwgKnWb"
          className="m-8 w-1/2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Discord
        </OutboundLink>
        <OutboundLink
          href="https://twitter.com/endaofinance"
          className="m-8 w-1/2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Twitter
        </OutboundLink>
        <OutboundLink
          href="https://github.com/endaofinance"
          className="m-8 w-1/2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          GiHub
        </OutboundLink>
      </div>
    </div>
  );
}
