import Header from "./Header";
import Degree from "./Degree";
import Calendar from "./Calendar";

function Wheather() {
  return (
    <>
      <div
        className="
        h-screen py-10
        bg-gradient-to-r from-[#cbdcee] to-[#b3d9fe] 
        "
      >
        <Header />
        <Degree />
        <Calendar />
      </div>
    </>
  );
}

export default Wheather;
