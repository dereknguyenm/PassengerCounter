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
    countEl.innerText = count
    console.log(count)
}

function save()
{
    console.log(count)

}




