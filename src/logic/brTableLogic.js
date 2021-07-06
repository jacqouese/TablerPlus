import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import init from "../data/initialValues";
import months from "../data/months";
import numbers from "../data/numbers";
import fullDays from "../data/fullDays";



export const generatePDF = (year, month) => { 

    //january 2021, because the algorytm starts from this day
    var date1 = new Date("01/01/2021");  
    var date2 = new Date(month+"/01/"+year);  

    //calculate time difference  
    var timeDifference = date2.getTime() - date1.getTime();  

    //calculate days difference by dividing total milliseconds in a day  
    var daysDifference = timeDifference / (1000 * 60 * 60 * 24);   
    daysDifference = Math.round(daysDifference);

    const daysInMonth = new Date(year, month, 0).getDate();

    html2canvas(document.querySelector('#capture'), {scrollY: -window.scrollY}).then(function(canvas) {
      var imgData = canvas.toDataURL("image/jpeg", 1);
      var pdf = new jsPDF('l', 'px', 'a4');
      pdf.setFontSize(30);
      var num1 = init[0]+daysDifference;
      var num2 = init[1]+daysDifference;
      var num3 = init[2]+daysDifference;
      var num4 = init[3]+daysDifference;

      //display current day od the week
      const date = new Date(year, month, 0);
      const firstDay = new Date(date.getFullYear() + ',' + (date.getMonth()+1) + ', 1');
      const dayOfTheWeek = firstDay.getDay();
      var tableDay = dayOfTheWeek-1;

      pdf.setDrawColor('red')
      for (let i = 1; i <= daysInMonth; i++) {
        if (tableDay < 7) {
          tableDay++;
        }
        else {
          tableDay = 1;
        }

        pdf.addImage(imgData, 'JPEG', 20, 50, 597, 322);
        pdf.setTextColor('black');
        //render date in the middle
        pdf.text(220, 35, i+' '+months[month]+' '+year+', '+fullDays[tableDay]);
        //handle numbers according to team and day
        pdf.setTextColor('red');
        pdf.setLineWidth(5.0)
        drawNumOrLine(pdf, numbers[num1%numbers.length], num1, 142);
        num1++;
        drawNumOrLine(pdf, numbers[num2%numbers.length], num2, 292);
        num2++;
        drawNumOrLine(pdf, numbers[num3%numbers.length], num3, 440);
        num3++;
        drawNumOrLine(pdf, numbers[num4%numbers.length], num4, 587);
        num4++;
        pdf.addPage();
      }
      pdf.save(year+'_'+month+'_br'+".pdf");
    });    
}

//private functions

const drawNumOrLine = (pdf, data, num, position) => {
  if (data != '') {
    num = num.toString();
    pdf.text(position, 75, numbers[num%numbers.length].toString());
  }
  else {
    pdf.line(position+25, 370, position-118, 50);
  }
}