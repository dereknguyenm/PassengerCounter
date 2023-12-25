//document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

// listen for clicks on increment button 
// increment count when clicked
// change count-el in HTML to show new count
function increment() 
{
    count += 1
    countEl.innerText = count
    console.log(count)
}





