// - Adding new Item in the menu "Caesar Salad with sardines"

// Create a new element
//Save it in a variable
var newItem= document.createElement('li');
// Create a text node.
// Save it in as variable
var newMenu = document.createTextNode('Caesar Salad with sardines');
// Attach text node we created
newItem.appendChild(newMenu);
// Set position where to add the element
var position = document.getElementsByTagName('ul')[0];
// Insert the new element
position.appendChild(newItem);
//Assign class name to the New Item
newItem.className = 'salad'


// - Changing class attribute for appetizers
var firstI = document.getElementById('p1');
firstI.className = 'appetizers';
var secondI = document.getElementById('p2');
secondI.className = 'appetizers';


// - Adding an attribute to item'Greek Salad'
var saladItem = document.getElementsByTagName('li').item(6); //Get the item by the number of the list
saladItem.setAttribute('class', 'salad'); // Add the attribute class

