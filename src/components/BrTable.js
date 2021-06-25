import { useEffect, useRef, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { NamesA, NamesB, NamesC, NamesD } from "../data/initialNames";
import Calendar from "./subcomponents/Calendar";
import ColorPicker from "./subcomponents/ColorPicker";
import PageTop from "./subcomponents/PageTop";
import Table from "./subcomponents/Table";


function BrTable() {
  //todays date
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  //date given by user
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  //handle colors of the table
  const [color, setColor] = useState('#F77070');

  const [dayColor, setDayColor] = useState('#FFFFFF');
  const dayElems = document.querySelectorAll('th, td.vertical-line, tr:nth-child(2)');
  dayElems.forEach(dayElem => {
    dayElem.style.backgroundColor = dayColor;
  });

  const [trColor, setTrColor] = useState('#FFFFFF');
  const elems = document.querySelectorAll('tr:nth-child(2n+4)');
  elems.forEach(elem => {
    elem.style.backgroundColor = trColor;
  });


  const handleClick = () => {
    html2canvas(document.querySelector('#capture')).then(canvas => {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('l', 'px', 'a4');

      pdf.addImage(imgData, 'JPEG', 0, 0, 620, 320);
      pdf.save("download.pdf");
    })
  }

  return (
    <section>
      <PageTop title={'Tabla brygad'} />
      <div className="row-flex">
        <div>
          <h4 className="subpage-subtitle" >Wybierz miesiąc oraz rok dla tabeli</h4>
          <Calendar setYear={setYear} setMonth={setMonth} year={year} month={month}/>
        </div>
        <div>
          <h4 className="subpage-subtitle" >Dopasuj styl</h4>
          <div className="color-picker-box">
            <ColorPicker name={'kolor głowny'} setColor={setDayColor} color={dayColor} />
            <ColorPicker name={'kolor kolumn'} setColor={setTrColor} color={trColor} />
            <ColorPicker name={'kolor weekendu'} setColor={setColor} color={color} />
          </div>
        </div>
      </div>
      <div className="row-flex-no-gap" id="capture">
        <Table name={'Brygada A'} names={localStorage.getItem('brygadaa')} />
        <Table name={'Brygada B'} names={localStorage.getItem('brygadab')} />
        <Table name={'Brygada C'} names={localStorage.getItem('brygadac')} />
        <Table name={'Brygada D'} names={localStorage.getItem('brygadad')} />
      </div>
      <button style={{marginTop: 30, marginBottom: 30}} onClick={handleClick} >Przygotuj PDF</button>
    </section>
  );
}

export default BrTable;