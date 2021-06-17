import { useState } from "react";
import Calendar from "./subcomponents/Calendar";
import ColorPicker from "./subcomponents/ColorPicker";
import PageTop from "./subcomponents/PageTop";
import ScheduleTable from "./subcomponents/ScheduleTable";


function Schedule() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [color, setColor] = useState('#F77070');

  return (
    <section>
      <PageTop title={'Harmonogram'} />
      <h4 className="subpage-subtitle" >Wybierz miesiąc oraz rok dla którego utworzysz harmonogram</h4>
      <Calendar setYear={setYear} setMonth={setMonth} year={year} month={month}/>
      <h4 className="subpage-subtitle" >Dopasuj styl</h4>
      <div className="color-picker-box">
        <ColorPicker name={'kolor główny'} setColor={setColor} />
        <ColorPicker name={'kolor lini'} />
        <ColorPicker name={'kolor weekendu'} />
      </div>
      <ScheduleTable year={year} month={month+1} color={color} />
    </section>
  );
}

export default Schedule;