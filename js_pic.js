var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

       //var oneDay = 24*60*60*1000;
  
        // Here are the two dates to compare
        //date1 = startdate
        //date2 = currentdate
        //This will need to be updated to the new start date. 
        var date1 = "2019-02-25";
         
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }
        date2 = yyyy + '-' + mm + '-' + dd;
        // First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
        date1 = date1.split('-');
        date2 = date2.split('-');
        // Now we convert the array to a Date object, which has several helpful methods
        date1 = new Date(date1[0], date1[1], date1[2]);
        date2 = new Date(date2[0], date2[1], date2[2]);
        // We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
        date1_unixtime = parseInt(date1.getTime() / 1000);
        date2_unixtime = parseInt(date2.getTime() / 1000);
        //These additional items are designed for further development and use.
        // This is the calculated difference in seconds
        var timeDifference = date2_unixtime - date1_unixtime;
        // in Hours
        var timeDifferenceInHours = timeDifference / 60 / 60;
        // and finaly, in days
        var timeDifferenceInDays = timeDifferenceInHours  / 24;
        //Time difference in weeks:
        var timeDifferenceInWeeks = timeDifferenceInDays / 7;
        
        var finaltime = Math.floor(timeDifferenceInWeeks); 
        
   
        document.getElementById("image").src = finaltime + ".png";
