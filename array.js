//   ARRAY

let data = ["nirmal","aman","nisha","niidhi"];
console.log(data);

// push (last se add kar ta hai )
data.push("amanmeena");
console.log(data);


// pop (last se ak eliment ka data delete kar tha  hai )
data.pop()
console.log(data);

//unshift (add data on frist eliment)
data.unshift("gunnu")
console.log(data)

//shift (delete the frist eliment) 
data.shift("gunnu")
console.log(data)

//  indexOf (return of index )
console.log(data.indexOf("niidhi")); //1(index of a number)
console.log(data.indexOf("arthi")) //-1 (element not avlebal)

//includes (search for a value)
data.includes("nirmal") //true
data.includes("arthi") //false

let car=["bmw","shift","bhugati"]

//concat 
 let all = data.concat(car);
 console.log(all); // concat the two arry 

 //reverse (revere an arry)
 all.reverse();
 console.log(all);

// slice

console.log(all.slice(4)); //'nisha', 'aman', 'nirmal'
console.log(all.slice(2,5)); //'bmw', 'niidhi', 'nisha'
console.log(all.slice(-4)); //'niidhi', 'nisha', 'aman', 'nirmal'(last se )

// splice
console.log(car.splice(2,0,"alto","thar"));//add the new element
console.log(car)
console.log(car.splice(2,1));//delete the element
console.log(car)
console.log(car.splice(2,1 ,"don"));
console.log(car)//modifay

// sort
let number=[23,43,466,567,57,57,57,]
console.log(car.sort());//sort string asending order
console.log(number.sort());//in sort canvert to the string after arenge asending order