const tab = ({ title }) => {
  return (
    <div className="cursor-pointer group">
      <p className="px-5 text-lg hover:font-bold active:font-bold text-[#366195]">
        {title}
      </p>
      <span className="block w-0 h-[3px] bg-yellow-500 mt-1 transition-all group-hover:w-full"></span>
    </div>
  );
};

export default tab;
