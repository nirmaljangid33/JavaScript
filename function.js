// function dice(){
//       let num = Math.floor((Math.random()*6)+1);
//       console.log("dice is ", num);
// }
// dice();
// concation
// let num = ["nirml" ,"jangid","kumar","jai hanuman ","jai baba li"];
// function concate(){
//     let result = num.trim().num.join();
     
    
//         console.log(result);
// }
// concate();

// function Expressions

// let hello = function(){
//     console.log("jai shree ram");
// }
// hello();

// hello = function(){
//     console.log("jai baba ki");
// }
// hello();


// function multigrrd(fun, count){ //higher order function
//     for(let i=0; i<count; i++){
//        fun();
//     }
// }
//     function greed(){
//         console.log("nirmal jangid");
//     }
// multigrrd(greed, 2);

// function parant(fun ,count){
//     for(let i=1;i<=count;i++){
//         fun();
//     }
// }


// function number(){
//     console.log("9587228230");
// }
// parant(number, 5);

// methods
let data ={
    num : function(){
        console.log(95451651656);;
    },
    name : function(){
        console.log("nirmal");
    },
    roll : function(){
        console.log(697010);
    }
}
data.name();
// arrow function 
let sum = (a,b) => {
     return a+b;
}
console.log(sum(2,4));

const cube = n => {
       return n*n*n;
}
console.log(cube(4));
