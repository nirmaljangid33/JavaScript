let todo =[];
let add = prompt("place enter the choice");

while(true){
    if(add == "quite"){
        console.log("you are quite");
        break;
    }
    else if(add =="list"){
        for(let i =0;i<=add.length;i++){
            console.log(i, add[i]);
        }
       
    }
    else if(add =="add"){
        let task = prompt("place enter the task");
        todo.push(task);
        console.log("task add ")
    }
    else if(add == "delete"){
        let indx = prompt("Enter the indx");
        todo.splice(indx ,1);
        console.log("task delete ")
    }
     add = prompt("place enter the chice");

}