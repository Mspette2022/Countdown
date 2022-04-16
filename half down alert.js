function whileCount() 
    {alert("in func");
        var currTime = 11;
        var i = 1;
        while (i < 12)
        {
    
    
            if (i == 11) 
            {   alert("i = 11")
                setTimeout(function () 
                {
                    //code goes here for timer
                    document.getElementById("countdownTimer").innerHTML = "Blast Off!";
                }, 1000 * i);
            } else if (i > 6) 
            {
                setTimeout(function () 
                {
                    document.getElementById("countdownTimer").innerHTML =
                       alert; "Warning Less than half way to launch, time left = " + currTime;
                    currTime = currTime - 1;
                }, 1000 * i);
            } else 
            {
                setTimeout(function () 
                {
                    document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                    currTime = currTime - 1;
                }, 1000 * i);
            }
            i++;
        }
    }
