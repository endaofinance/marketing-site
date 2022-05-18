import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Does EnDAO have a token?",
    answer:
      "No, the EnDAO protocol doesnt have a token. It's important that the protocol is decentralized and censorship resistant and we think that tokens can comprimize our mission.",
  },
  {
    question: "Is EnDAO a DAO?",
    answer:
      "No, EnDAO is a protocol that allows people to create DAOs for the purpose of funding people or projects. The created DAO's are govened by the parameters setup by the beneficiary when the endaoments are setup.",
  },
  {
    question: "Is EnDAO only for non profits?",
    answer:
      "No, the EnDAO protocol can be used to fund anything. Non profits are just one of the many use cases.",
  },
  {
    question: "What tokens can be deposited?",
    answer:
      "Currently assets deposited into the Endaoment contracts must be liquidity pool tokens. In the future we will support single token deposits.",
  },
  {
    question: "Does the beneficiary have access to the assets I deposit?",
    answer:
      "No. This is one of the reasons that this use case works perfectly on the blockchain. Assets are deposited into a smart contract and the depositor always has the ability to withdraw the assets at any time. At no point does the beneficiary or the DAO have direct control over the funds.",
  },
  {
    question:
      "If I am looking for funding why would I choose this option over others?",
    answer:
      "If you have access to other options you probably use those sources as well. Funding isn't zero sum and projects usually have a blend of equity/debt/grant funding depending on the needs. This is just another option. One benefit to EnDAO is that it is a more sustainable funding method vs  continuous debt/equity/grant fundraising. A funding campaign run one time will continue to fund your project in perpetuity.",
  },
  {
    question: "Is EnDAO a blockchain?",
    answer:
      "EnDAO is an application built on top of the Ethereum blockchain. We have plans to extend to Ethereum Layer 2 protocols.",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function () {
  return (
    <div className="bg-gray-50" id="faqs">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
