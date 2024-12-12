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
          className="isolate flex divide-x divide-gray-200 overflow-hidden items-center justify-between rounded-lg border shadow-lg"
          aria-label="Tabs"
          style={{ width: '89%' }}
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
      <div 
        className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px]"
        style={{
          position: 'relative',
          marginTop: '2rem'
        }}
      >
        {tabs[selectedTab].content}
      </div>
    </section>
  );
};

export default Tabs;
