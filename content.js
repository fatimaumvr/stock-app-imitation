export let k=10
let p=0
export  function obj(){
   let rand=Math.random().toFixed(2)
   let check=rand>p ? `<p>Price: <img src='./green.png'>${rand}</p>` : rand<p ? `<p>Price: <img src='red.png'>${rand}</p>` : `<p>Price: <img src='gray (2).png'>${rand}</p>`
   p=rand
    return {name:'QTechAI',
    symbol:'QTA',
    price:check,
    time:`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}}