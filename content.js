
let p=0
function obj(){
   let rand=Math.random().toFixed(2)
   let check=rand>p ? `<img src='green.png'>${rand}` : rand<p ? `<img src='red.png'>${rand}` : `<img src='gray (2).png'>${rand}`
   p=rand
    return {name:'QTechAI',
    symbol:'QTA',
    price:check,
    time:`${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getSeconds()}`}}