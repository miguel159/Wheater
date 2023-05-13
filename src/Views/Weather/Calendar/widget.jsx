const widget = ({ img, text, degree }) => {
  return (
    <div className="flex rounded-full p-4 justify-center items-center gap-2 bg-[#c0defc] flex-col">
      <p className="text-sm font-semibold text-[#366195]">{text}</p>
      <img src={img} alt="clima" className="h-10" />
      <p className="text-sm font-semibold text-[#366195]">{degree} </p>
    </div>
  );
};

export default widget;
