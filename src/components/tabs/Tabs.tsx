import React, { useState } from 'react';
import TabButton from './Tab';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <section>
      <div className="hidden md:flex justify-center align-center">
        <nav
          className="isolate flex divide-x divide-gray-200 overflow-hidden items-center justify-between rounded-lg border shadow-lg w-[89%]"
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
      {tabs[selectedTab].content}
    </section>
  );
};

export default Tabs;
