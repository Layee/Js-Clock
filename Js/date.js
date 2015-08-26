
var diem = "AM";
     
     function DisplayDateAndTime(){
          
          var currentTime = new Date();
          var hour = currentTime.getHours();
          var minutes = currentTime.getMinutes();
          var seconds = currentTime.getSeconds();
      
          if (hour === 0) {
          	hour = 12;

          } else if(hour > 12) {
          	  hour = hour - 12;
          	  diem = "PM";
          }

            if (hour < 10) {
            	hour = "0" + hour;
             }

            if (minutes < 10) {
            	minutes = "0" + minutes;
             }

             if (seconds < 10) {
            	seconds = "0" + seconds;
             }

        var Eltime = document.getElementById('time');
            Eltime.textContent = hour + ":" + minutes + ":" + seconds + "" + diem;
       setTimeout(DisplayDateAndTime,1000)

     }

     DisplayDateAndTime();