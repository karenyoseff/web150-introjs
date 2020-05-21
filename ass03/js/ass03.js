

//Object using construction notation template 

//Properties
function Concert(name, tickets, sold) {
    this.name = name;
    this.tickets = tickets;
    this.sold = sold;

//Method
    this.checkTickets = function() {
        return this.tickets - this.sold;
    };
}
//Instances of the object
var queenConcert = new Concert('Queen', 300, 100);
var adeleConcert = new Concert('Adele', 200, 50);

//Show results for Queen concert Tickets
var info1 = queenConcert.name + ' tickets: ';
    info1 += queenConcert.checkTickets();
var concert1 = document.getElementById('concert1');
concert1.textContent = info1;


//Show results for Adele concert Tickets
// I used textcontent because has better performance because its value is not parsed as HTML, so its faster

var info2 = adeleConcert.name + ' tickets: ';
    info2 += adeleConcert.checkTickets();
var concert2 = document.getElementById('concert2');
concert2.textContent = info2;


