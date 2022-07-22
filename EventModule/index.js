//Node js has an bulit in module called "event"
//where you can ..create ,fire and listen on your own event

//EventEmitter is a class of event module

//then we create an object of eventemitter



// we have created a function executed when a 
//"" event is fired. To fire an event, use the emit() method. 
const EventEmitter = require("events");
const eventemitter = new EventEmitter();


//Create an event handler


//
eventemitter.on('scream',() => //function define in the language of 
//function
{
    console.log('Jai jinedra');
});

eventemitter.on('scream',() =>
{
    console.log('hinal');
});

//Fire the event:
eventemitter.emit('scream'); //function call