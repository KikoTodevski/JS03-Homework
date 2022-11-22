//HELLO WORLD exam (if statement)

var code = "en";

if(code === "en") {
    console.log("Hello World");
} else if(code === "mk") {
    console.log("Здраво свету");
} else if(code === "de") {
    console.log("Hallo Welt");
} else {
    console.error("Invalid input");
};

//SEASONS exam (if statement)

var season = "November";

if(season === "September" || season === "October" || season === "November") {
    console.log("Autumn");
} else if(season === "December" || season === "January" || season === "February") {
    console.log("Winter");
} else if(season === "March" || season === "April" || season === "May") {
    console.log("Spring");
} else if(season === "June" || season === "July" || season === "August") {
    console.log("Summer");
} else {
    console.error("Invalid input");
};

//MUSICIANS exam (switch statement)

var band_members_num = 3;

switch(band_members_num) {
    case 1:
        console.log("This band is a one.");
        break;
    case 2:
        console.log("This band is a two.");
        break;
    case 3:
        console.log("This band is a three.");
        break;
    case 4:
        console.log("This band is a four.");
        break;
    case 5:
        console.log("This band is a five.");
        break;
    case 6:
        console.log("This band is a six.");
        break;
    case 7:
        console.log("This band is a seven.");
        break;
    case 8:
        console.log("This band is a eight.");
        break;
    case 9:
        console.log("This band is a nine.");
        break;
    case 10:
        console.log("This band is a ten.");
        break;
        default: console.error("Invalid input");
};