import Clouds from "../../../assets/IconsLight/clouds.png";

const index = () => {
  return (
    <div className="text-center my-10">
      <div className="relative">
        <p className="text-base font-bold">dia</p>
        <p className="text-7xl font-bold text-[#3b6396]">-11 °C</p>
        <p className="text-sm font-bold z-10">snow</p>
      </div>
      <div className="flex justify-center">
        <img className="z-1 w-30 -mt-20" src={Clouds} alt="" />
      </div>
    </div>
  );
};

export default index;
