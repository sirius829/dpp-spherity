import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  containerClassName?: string; // Optional class for the container
}

const Section = ({ title, children, containerClassName }: SectionProps) => {
  return (
    <section className="flex flex-col gap-y-[19px] px-4">
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
};

export default Section;
