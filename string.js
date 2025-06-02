// trim methode

let msg = "   Hello dosto   ";
console.log(msg.trim()); //Hello dosto

// toUpperCase method

let str = "jai hanuman ji";
let data = str.toUpperCase();
console.log(data) // JAI HANUMAN JI


// toLowerCase method

let str1 = "JAI SHREE RAM ";
console.log(str.toLowerCase()) // jai shree ram

// indexOf methode

let str2 = "i love coding ";
console.log(str2.indexOf("love")); //2  (frist latter latter of a index)
console.log(str2.indexOf("z"));  //-1 (not found)
console.log(str2.indexOf("o"));  // 3 (only 1 index)


// methode chaing
let mes = "   jai baba ki    ";
console.log(mes.toUpperCase().trim());//JAI BABA KI

// SLICE METHODE

let name = "nirmal jangid ";
console.log(name.slice(0,3))  //nir
console.log(name.slice(7, name.length));// jangid
console.log(name.slice(9)) ; // nigd 

// replace 
let str4 = "my name is nirmal jangid";
console.log(str4.replace("nirmal", "gunnu")); // my name is gunnu jangid 
console.log(str4.replace("N","i")); //name => Name (ye string ke frist acrince ko  chang kar ta hai)

//repeat 
let str5 = "nisha";
console.log(str5.repeat(3)); //nishanishanisha (repeat value)
