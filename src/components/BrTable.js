import { useState } from "react";

import Calendar from "./subcomponents/Calendar";
import PageTop from "./subcomponents/PageTop";
import Table from "./subcomponents/Table";
import { generatePDF } from "../logic/brTableLogic";


function BrTable() {
  //todays date
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  //date given by user
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  return (
    <section>
      <PageTop title={'Tabla brygad'} />
      <div className="row-flex">
        <div>
          <h4 className="subpage-subtitle" >Wybierz miesiąc oraz rok dla tabeli</h4>
          <Calendar setYear={setYear} setMonth={setMonth} year={year} month={month}/>
        </div>
      </div>
      <div className="row-flex-no-gap table-container" id="capture">
        <Table name={'Brygada A'} names={localStorage.getItem('brygadaa')} />
        <Table name={'Brygada B'} names={localStorage.getItem('brygadab')} />
        <Table name={'Brygada C'} names={localStorage.getItem('brygadac')} />
        <Table name={'Brygada D'} names={localStorage.getItem('brygadad')}/>
      </div>
      <button onClick={() => generatePDF(year, month+1)} >Przygotuj PDF</button>
    </section>
  );
}

export default BrTable;