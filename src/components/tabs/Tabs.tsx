import React, { useState } from 'react';
import TabButton from './Tab';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setDropdownOpen(false); // Close dropdown on tab select in mobile view
  };

  return (
    <>
      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-center align-center">
        <nav
          className="flex isolate divide-x divide-gray-200 overflow-hidden items-center justify-between rounded-lg border shadow-lg w-[90%]"
          aria-label="Tabs"
        >
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              label={tab.label}
              isActive={selectedTab === index}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden px-4">
        <div className="relative">
          <button
            type="button"
            className="w-full h-12 rounded-lg p-2 py-3 pl-4 text-left text-white font-medium shadow-sm flex items-center justify-between bg-[#97a7b6]"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <span>{tabs[selectedTab].label}</span>
            {isDropdownOpen ? <ChevronUpIcon className='h-8' /> : <ChevronDownIcon className='h-8' />}
          </button>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2">
              {tabs.map((tab, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left px-4 py-2 ${
                      selectedTab === index ? 'bg-gray-200 font-semibold' : ''
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Tab Content */}
      {tabs[selectedTab].content}
    </>
  );
};

export default Tabs;
