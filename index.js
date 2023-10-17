

// declare variables for saving and counting 
let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")


// set default count to 0
let count = 0

// function to increment counter
function incrementCount() {
    count += 1
    countElement.textContent = count
}

// function to increment saves
function saveCount(){
    let counterString = count + " - "
    saveElement.textContent += counterString

    // reset increment counter once save button is clicked
    countElement.textContent = 0
    count = 0
}

function clearEntries() {
    saveElement.textContent = "Previous entries: "
}

