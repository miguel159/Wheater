const widget = ({ img, text, degree }) => {
  return (
    <div className="flex rounded-full p-4 justify-center items-center gap-2 bg-cyan-300 flex-col">
      <p className="text-sm">{text}</p>
      <img src={img} alt="clima" className="h-10" />
      <p className="text-base">{degree} </p>
    </div>
  );
};

export default widget;
