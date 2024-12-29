let x=+prompt("inter number of month");

switch(x){
    case 1:   
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("days is 31")
        break; 
    case 4:
    case 6:
    case 9:
    case 11:
        alert("days is 30")
        break; 
    case 2:
            alert("days is 28")
            break; 
        }