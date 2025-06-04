for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log("even number =" , i);
    }
      else {
        console.log("odd number = ",i)
      }
}

// 5 tabele  
let number = prompt("write your number ")
for(let i=1;i<=10;i++){
    let n = i*number;
    console.log(`5 * ${i} = `,n);
}

let movie = "avatar";
let guse = prompt("enter the movie name :");
while(movie != guse ){
    guse = prompt("place try again .enter the movie name :");
    
    movie++;
}
if(movie == guse){
console.log("guse the right name");
}
else {
    console.log("you are quite");
}


let fruits = [["banana","orange","papaya"],"nirmal","jangid","kumar"];
for(i=0;i<fruits.length;i++){
    for(j=0;j<fruits[i].length;j++){

        console.log(i, fruits[i],fruits[j])
    }
    // console.log(i, fruits[i])
}

 for of loop
let data =["nairmal",23 ,"aman",34,"deepak",45]
for(datas of data){
    console.log(datas);
}

// in string
let str = "nirmal jangid";
for(st of str){
    console.log(st);
}
let fruits = [["banana","orange","papaya"],["nirmal","jangid","kumar"]];
for(fruit of fruits){
    for(name of fruit){
        console.log(name);
    }
}
