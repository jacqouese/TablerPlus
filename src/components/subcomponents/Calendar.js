import months from '../../data/months';

function Calendar(props) {

  const handleYear = (action) => {
    if (action == 'next') {
      props.setYear(props.year + 1);
    }
    else if (action == 'previous') {
      if (props.year <= 2021) {
        console.log('enndddd')
      }
      else {
        props.setYear(props.year - 1);
      }
    }
  }

  const handleMonth = (action) => {
    if (action == 'next') {
      //if gets over 12th month then year++ and start again
      if (props.month < 11) {
        props.setMonth(props.month + 1);
      }
      else {
        props.setMonth(0);
        props.setYear(props.year + 1);
      }
    }
    else if (action == 'previous') {
      //stop the user from going lower than January 2021
      if (props.month == 1 && props.year == 2021) {
        console.log('cant go anymore')
        return
      }
      //if gets lower than 1st month then year-- and month = 12
      if (props.month > 0) {
        props.setMonth(props.month - 1);
      }
      else {
        props.setMonth(11);
        props.setYear(props.year - 1);
      }
    }
  }

    return (
      <div>
        <div className="calendar-body" style={{ marginBottom: 20 }}>
          <span onClick={() => handleYear('previous')} className="calendar-option">{ props.year-1 }</span>
          <span className="calendar-option calendar-option-active">{ props.year }</span>
          <span onClick={() => handleYear('next')} className="calendar-option">{ props.year+1 }</span>
        </div>
        <div className="calendar-body">
          <span onClick={() => handleMonth('previous')} className="calendar-option">{ months[props.month] }</span>
          <span className="calendar-option calendar-option-active">{ months[props.month+1] }</span>
          <span onClick={() => handleMonth('next')} className="calendar-option">{ months[props.month+2] }</span>
        </div>
      </div>
    );
  }
  
  export default Calendar;
  