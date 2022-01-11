// My Daily Decision 

// One of the most common things I do it figure out what I can get done before 
// heading to the gym for my workout.  
// set global variables for decision making

// Time in this code is expressed in the following way: 1.5 would be 1 hour and 30 minutes
let currentTime = 6.8
let gymClassStartTime = 8
let availableTime = 0
let timeBeforeGym = gymClassStartTime - currentTime

//set variables for driving and unplanned event
let myTurnToDrive = true
let unplannedEvent = false

// set variable for output message and list of things to do before gym
// list always includes coffee 
let message = ''
let list = 'Make and Drink Coffee, '

console.log('This output is based on the following variable data:')
console.log('Current Time ' + currentTime)
console.log('Gym time ' + gymClassStartTime)
console.log('Time Before Gym ' + timeBeforeGym)
console.log('myTurntoDrive ' + myTurnToDrive)
console.log('unplannedEvent ' + unplannedEvent)

// determine available time based on if I am driving or getting a drive
if (myTurnToDrive) {
  availableTime = timeBeforeGym - 0.25
} else {
  availableTime = timeBeforeGym - 0.15
}

// display this on webpage
console.log('Morning Tasks')
console.log('___________________')

// logic for determining what things I can before the gym

if (availableTime > 1.5 || !unplannedEvent) {
  list = list + "Mediate, Get Morning Sun, Make Green Drink"
  message = "Got it all done"
} else if (availableTime < 0.75 || !unplannedEvent) {
  list = list + "Mediate"
  message = "After workout, get some sun and make green drink"
} else {
  list = list + "Check Time"
  message = "Unplanned event happen, just get back on track tomorrow"
}

// display list and message on the webpage 

console.log(list)
console.log(message)
console.log('Have a great day!!')