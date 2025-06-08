// this keywird

let info ={
    name: "nirmal",
    age :19,
    roll :697010,
    eng:90,
    math:89,
    py:34,
    // avg(){
    //       let all =(this.eng+this.math+this.py)/3; //using this keyword
    //       console.log(all);
    //       console.log(`Name is ${this.name} roll number :${this.roll}`);
    avg(){
          let all =(info.eng+info.math+info.py)/3;// using a object name 
          console.log(all);
    }
    
}
info.avg();