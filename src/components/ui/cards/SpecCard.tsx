interface SpecCardProps {
  title: string;
  description?: string;
}

const SpecCard = ({ title, description }: SpecCardProps) => {
  return (
    <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
      <div className="flex flex-col gap-y-[10px]">
        <div className="text-gray-500 text-sm font-inter font-semibold">
          {title}
        </div>
        <dd className="text-gray-700 text-base font-inter font-semibold">
          {description}
        </dd>
      </div>
    </div>
  );
};

export default SpecCard;
