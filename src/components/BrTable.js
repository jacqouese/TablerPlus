import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (localStorage.getItem('brygadaa') == null) {
      localStorage.setItem('brygadaa', NamesA)
    }
    if (localStorage.getItem('brygadab') == null) {
      localStorage.setItem('brygadab', NamesB)
    }
    if (localStorage.getItem('brygadac') == null) {
      localStorage.setItem('brygadac', NamesC)
    }
    if (localStorage.getItem('brygadad') == null) {
      localStorage.setItem('brygadad', NamesD)
    }
    
  }, []);
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
      <div className="row-flex-no-gap">
        <Table name={'Brygada A'} names={localStorage.getItem('brygadaa')} />
        <Table name={'Brygada B'} names={localStorage.getItem('brygadab')} />
        <Table name={'Brygada C'} names={localStorage.getItem('brygadac')} />
        <Table name={'Brygada D'} names={localStorage.getItem('brygadad')} />
      </div>
      <button style={{marginTop: 30}}>Przygotuj PDF</button>
    </section>
  );
}

export default BrTable;