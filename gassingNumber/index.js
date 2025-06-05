let data = prompt("enter the what do you");
let num = prompt("enter the number of range");
let random = Math.floor((Math.random()*num)+1);
let gusing = prompt("gussing the number ");
while(true){
    if(data =="play"){

        if(random == gusing){
            console.log(random);
            console.log("oo my good you are gassing the right number ");
                   break;
        }
            else if(random <gusing){
                console.log("random number is small",random);
                gusing = prompt("enter enter the number try agin");
        }
        else {
                console.log("random number is large",random);
                gusing = prompt("enter enter the number try agin");
        }
    }
    else if(data =="quite"){
        console.log("you are quite")
        break;
    }
}