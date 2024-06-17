// switch case

// syntax =

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month =3

switch(month){
    case 1:
        console.log("january");
        break; // to copy this shif+alt+down arrow
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case match")
        break;
}
//if you not use break then it will execute all the  case except default from where the real case is match 

// if the value in string

const months ="april"

switch (months) {
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("february")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;
    case "may":
        console.log("may")
        break;

    default:
        break;
}
