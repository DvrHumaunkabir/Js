let marks =60


switch (true){
    case (marks<=100 && marks >=80):
        console.log("A+");
        break;

        case (marks<80 && marks >=70):
        console.log("A-");
        break;

    case (marks<70 && marks >=60):
        console.log("A-");
        break;

    case (marks<60 && marks >=50):
        console.log("c");
        break;

    case (marks<50 && marks >=40):
        console.log("d");
        break;

    default:
        console.log("Unrecognizing");

}