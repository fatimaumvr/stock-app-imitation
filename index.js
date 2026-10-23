import { obj} from "./content.js"

const nameEl=document.getElementById('name')
const symbolEl=document.getElementById('symbol')
const priceEl=document.getElementById('price')
const timeEl=document.getElementById('time')



function render(){
const {name,symbol,price,time}=obj()
nameEl.textContent=`Name: ${name}`
symbolEl.textContent=`Symbol: ${symbol}`
priceEl.innerHTML=`${price}`
timeEl.textContent=`Time: ${time}`
}

setInterval(() => {
    render()
}, 1000)