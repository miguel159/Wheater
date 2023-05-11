import Tab from "./tab";
import Widget from "./widget";
import Snow from "../../../assets/IconsLight/snow.png";

const Calendar = () => {
  return (
    <>
      <div className="flex justify-around">
        <Tab title="Hoy" />
        <Tab title="Mañana" />
        <Tab title="Semana" />
      </div>

      <div className="flex justify-around gap-2">
        <Widget img={Snow} text={"Now"} degree={"21 °C"} />
      </div>
    </>
  );
};

export default Calendar;
