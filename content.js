
let p=null
function obj(){
    let k;
   let rand=Math.random().toFixed(2)
   if(p>rand){
    k=`<img src='./red arrow.png'>${rand}`
   }
    return {name:'QTechAI',
    symbol:'QTA',
    price:'',
    time:`${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getSeconds()}`}}