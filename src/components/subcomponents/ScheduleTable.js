
import numbers from '../../data/numbers';
import days from '../../data/days';
import init from '../../data/initialValues';

function ScheduleTable(props) {
  // date which the table will generate for
  const date = new Date(props.year, props.month, 0);

  //january 2021, because the algorytm starts from this day

  var date1 = new Date("01/01/2021");  
  var date2 = new Date(props.month+"/01/"+props.year);  

  //calculate time difference  
  var timeDifference = date2.getTime() - date1.getTime();  

  //calculate days difference by dividing total milliseconds in a day  
  var daysDifference = timeDifference / (1000 * 60 * 60 * 24);   
  daysDifference = Math.round(daysDifference);

  const daysInMonth = new Date(date.getFullYear(), (date.getMonth()+1), 0).getDate();
  const firstDay = new Date(date.getFullYear() + ',' + (date.getMonth()+1) + ', 1');
  const dayOfTheWeek = firstDay.getDay();
  const thArray = [];
  const dayNumbers = [];
  const tdA = [];
  const tdB = [];
  const tdC = [];
  const tdD = [];

  //display days of the week
  var tableDay = dayOfTheWeek-1;
  var dayClass = '';
  for (let i = 1; i <= daysInMonth; i++) {
    
    //start looping from the beginning at the end of the array
    if (tableDay < 7) {
      tableDay++;
    }
    else {
      tableDay = 1;
    }
    
    //assign weekend class if the day is weekend
    if (tableDay == 6 || tableDay == 7) {
      dayClass = {backgroundColor: props.color};
    }
    else {
      dayClass = {};
    }

    thArray.push(<th style={dayClass}>{days[tableDay]}</th>);
  }

  // display 1-31
  for (let i = 1; i <= daysInMonth; i++) {
    dayNumbers.push(<td>{i}</td>);
  }

  const handleNumbers = (num, arrayToPush) => {
    for (let i = 1; i <= daysInMonth; i++) {
      arrayToPush.push(<td>{numbers[num%numbers.length]}</td>);
      //start again after last index
      num++
    }
  }

  handleNumbers(init[0]+daysDifference, tdA);
  handleNumbers(init[1]+daysDifference, tdB);
  handleNumbers(init[2]+daysDifference, tdC);
  handleNumbers(init[3]+daysDifference, tdD);

  return (
    <div className="schedule-table-box">
      <h3>{props.month} {props.year}</h3>
      <table>
        <tbody>
          <tr className="top-tr">
            <th key={thArray.length} className="vertical-line no-line">{dayOfTheWeek}</th>
            {thArray}
          </tr>
          <tr className="top-tr top-tr-line">
            <td key={dayNumbers.length} className="vertical-line no-line"> </td>
            {dayNumbers}
          </tr>
          <tr>
            <td key={tdA.length} className="vertical-line">A</td>
            {tdA}
          </tr>
          <tr>
            <td key={tdB.length} className="vertical-line">B</td>
            {tdB}
          </tr>
          <tr>
            <td key={tdC.length} className="vertical-line">C</td>
            {tdC}
          </tr>
          <tr>
            <td key={tdD.length} className="vertical-line">D</td>
            {tdD}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;
