let data = prompt("enter the what do you");
while(true){
    if(data =="play"){
let num = prompt("enter the number of range");
let random = Math.floor((Math.random()*num)+1);
        let gusing = prompt("gussing the number ");
        if(random == gusing){
            console.log(random);
            console.log("oo my good you are gassing the right number ");
                   break;
        }
        else{
          gusing = prompt("enter enter the number try agin");
        }
    }
    else if(data =="quite"){
        console.log("you are quite")
        break;
    }
}