"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const accounts = [
  { id: 1, account: "Account 1" },
  { id: 2, account: "Account 2" },
  { id: 3, account: "Account 3" },
  { id: 4, account: "Account 4" },
  { id: 5, account: "Account 5" },
  { id: 6, account: "Account 6" },
  { id: 7, account: "Account 7" },
  { id: 8, account: "Account 8" },
  { id: 9, account: "Account 9" },
  { id: 10, account: "Account 10" },
];

export default function Accounts({ index, setIndex }) {
  const [selected, setSelected] = useState(accounts[0]);

  const handleSelectionChange = (selectedAccount) => {
    const selectedIndex = accounts.findIndex(
      (account) => account.id === selectedAccount.id,
    );
    setSelected(selectedAccount);
    setIndex(selectedIndex);
  };

  return (
    <Listbox value={selected} onChange={handleSelectionChange}>
      <div className="relative -scroll-mt-96 pt-9">
        <ListboxButton className="relative w-[300px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
          <span className="block truncate">{selected.account}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="size-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {accounts.map((account, idx) => (
            <ListboxOption
              key={account.id}
              value={account}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {account.account}
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
