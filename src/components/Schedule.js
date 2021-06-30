import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import months from "../data/months";
import Calendar from "./subcomponents/Calendar";
import ColorPicker from "./subcomponents/ColorPicker";
import PageTop from "./subcomponents/PageTop";
import ScheduleTable from "./subcomponents/ScheduleTable";


function Schedule() {
  //todays date
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  //date given by user
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  //handle colors of the table
  const [color, setColor] = useState('#FFFFFF');
  const colors = [
    '#ffffff',
    '#ff4b5c',
    '#70a7ff',
    '#ffff2e',
    '#ff983d',
  ];

  const [dayColor, setDayColor] = useState('#FFFFFF');
  const dayColors = [
    '#ffffff',
    '#dbdbdb',
    '#b5dee8',
    '#e8acae',
    '#c0e8ac',
  ];
  const dayElems = document.querySelectorAll('th, td.vertical-line, tr:nth-child(2)');
  dayElems.forEach(dayElem => {
    dayElem.style.backgroundColor = dayColor;
  });

  const [trColor, setTrColor] = useState('#FFFFFF');
  const trColors = [
    '#ffffff',
    '#e6e6e6',
    '#b5dee8',
    '#e8acae',
    '#c0e8ac',
  ];
  const elems = document.querySelectorAll('tr:nth-child(2n+3)');
  elems.forEach(elem => {
    elem.style.backgroundColor = trColor;
  });

  const handleClick = () => {
    html2canvas(document.querySelector('#schedule')).then(canvas => {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('l', 'px', 'a4');

      pdf.addImage(imgData, 'JPEG', 12, 100, 610, 180);
      pdf.save(year+"_"+month+".pdf");
    })
  }

  return (
    <section>
      <PageTop title={'Harmonogram'} />
      <div className="row-flex">
        <div>
          <h4 className="subpage-subtitle" >Wybierz miesiąc oraz rok dla harmonogramu</h4>
          <Calendar setYear={setYear} setMonth={setMonth} year={year} month={month}/>
        </div>
        <div>
          <h4 className="subpage-subtitle" >Dopasuj styl</h4>
          <div className="color-picker-box">
            <ColorPicker name={'kolor głowny'} setColor={setDayColor} color={dayColor} colors={dayColors} />
            <ColorPicker name={'kolor kolumn'} setColor={setTrColor} color={trColor} colors={trColors} />
            <ColorPicker name={'kolor weekendu'} setColor={setColor} color={color} colors={colors} />
          </div>
        </div>
      </div>
      <h4 className="subpage-subtitle" >Podgląd</h4>
      <div id="schedule">
        <h1>{months[month+1]} {year}</h1>
        <ScheduleTable year={year} month={month+1} color={color} />
      </div>
      <button style={{marginTop: 30, marginBottom: 30}} onClick={handleClick} >Przygotuj PDF</button>
    </section>
  );
}

export default Schedule;