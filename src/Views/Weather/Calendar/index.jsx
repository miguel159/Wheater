import Tab from "./tab";
import Widget from "./widget";
import Snow from "../../../assets/IconsLight/snow.png";

const Calendar = () => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-3xl my-10 p-8">
        <div className="flex justify-around">
          <Tab title="Hoy" />
          <Tab title="Mañana" />
          <Tab title="Semana" />
        </div>

        <div className="flex justify-around gap-2 mt-4">
          <Widget img={Snow} text={"Now"} degree={"21 °C"} />
          <Widget img={Snow} text={"Now"} degree={"21 °C"} />
          <Widget img={Snow} text={"Now"} degree={"21 °C"} />
          <Widget img={Snow} text={"Now"} degree={"21 °C"} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
