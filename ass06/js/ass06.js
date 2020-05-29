// - Adding new Item in the menu "Caesar Salad with sardines"

// Create a new element
//Save it in a variable
var newItem = document.createElement('li');
//Setting bold style to the firsts words of the text
var boldItem = document.createElement('b');
boldItem.innerText = 'Caesar Salad';
// Creating the rest of the text without bold styling
var newMenu = document.createTextNode(' with sardines');
// Attach text node we created
newItem.appendChild(boldItem);
newItem.appendChild(newMenu);
// Set position where to add the element
var position = document.getElementsByTagName('ul')[0];
// Insert the new element
position.appendChild(newItem);
//Assign class name to the New Item
newItem.className = 'salad'


// - Changing class attributes for items in the menu to get styles
var items = document.getElementsByTagName('li');
items[0].className = 'appetizers';
items[1].className = 'appetizers';
items[2].className = 'pasta';
items[3].className = 'pasta';
items[4].className = 'pasta';

// items[5].className = 'pasta';      //This is an "unavailable" items

// // - Adding an id attribute to item 'Greek Salad'
var lastItem = document.getElementsByTagName('li')[7];
lastItem.setAttribute("id", "p8")

//Creating a loop for seasonal items in the menu by month, so depending on the month it will add one item
var today = new Date(); //creating a var for a new date
var month = today.getMonth(); //getting the current month
if (month === 4) { // Assigning the conditional to May(4)
    // - Adding an attribute to item'Greek Salad'
    var saladItem = document.getElementsByTagName('li').item(6); //Get the item by the number of the list
    saladItem.setAttribute('class', 'salad'); // Add the attribute class
}