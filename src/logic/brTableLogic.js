import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import init from "../data/initialValues";
import months from "../data/months";
import numbers from "../data/numbers";



export const generatePDF = (year, month) => { 

    //january 2021, because the algorytm starts from this day
    var date1 = new Date("01/01/2021");  
    var date2 = new Date(month+"/01/"+year);  

    //calculate time difference  
    var timeDifference = date2.getTime() - date1.getTime();  

    //calculate days difference by dividing total milliseconds in a day  
    var daysDifference = timeDifference / (1000 * 60 * 60 * 24);   
    daysDifference = Math.round(daysDifference);

    html2canvas(document.querySelector('#capture'), {scrollY: -window.scrollY}).then(function(canvas) {
      var imgData = canvas.toDataURL("image/jpeg", 1);
      var pdf = new jsPDF('l', 'px', 'a4');
      pdf.setFontSize(30);
      var num1 = init[0]+daysDifference;
      var num2 = init[1]+daysDifference;
      var num3 = init[2]+daysDifference;
      var num4 = init[3]+daysDifference;
      
      for (let i = 1; i < 10; i++) {
        pdf.addImage(imgData, 'JPEG', 20, 20, 620, 300);
        pdf.setTextColor('black');
        //render date in the middle
        pdf.text(180, 30, i+' '+months[month]+' '+year);
        //handle numbers according to team and day
        pdf.setTextColor('red');
        pdf.text(130, 75, numbers[num1%numbers.length].toString());
        num1++;
        pdf.text(270, 75, numbers[num2%numbers.length].toString());
        num2++;
        pdf.text(405, 75, numbers[num3%numbers.length].toString());
        num3++;
        pdf.text(540, 75, numbers[num4%numbers.length].toString());
        num4++;
        pdf.addPage();
      }
      pdf.save(year+".pdf");
    });    
}