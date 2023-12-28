//document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0

// listen for clicks on increment button 
// increment count when clicked
// change count-el in HTML to show new count
function increment() 
{
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save()
{
    let countStr = count + " - "
    saveEl.textContent += countStr
    // Sets counts back to 0 and sets text to that value
    count = 0
    countEl.textContent = 0
}




