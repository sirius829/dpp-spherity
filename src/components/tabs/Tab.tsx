type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = ({ label, isActive, onClick }: TabProps) => {
  return (
    <a
      onClick={onClick}
      className={`group flex justify-center items-center w-full h-[50px] cursor-pointer relative px-[10px] py-[6px] text-center text-sm font-medium font-inter  focus:z-10 ${
        isActive
          ? 'text-white bg-[#97A7B6] hover:text-white'
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label}
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 bg-[#97A7B6]"
        ></span>
      )}
    </a>
  );
};

export default TabButton;
