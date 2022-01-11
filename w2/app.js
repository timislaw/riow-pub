// showOnPage will output on the webpage any content we provide to it. 

const showOnPage = function(text) {
  let newParagraph = document.createElement('p')
  newParagraph.innerHTML = text
  let outputDiv = document.getElementById('output')
  outputDiv.append(newParagraph)
}

// My Daily Decision
// One of the most common things I do it figure out what I can get done before
// heading to the gym for my workout.

// set global variables for decision making
// Time in this code is expressed in the following way: 1.5 would be 1 hour and 30 minutes
let currentTime = 7
let gymClassStartTime = 8
let availableTime = 0
let timeBeforeGym = gymClassStartTime - currentTime
let myTurnToDrive = true
let unplannedEvent = false

showOnPage('<b>This output is based on the following global variable data:</b>')
showOnPage('Current Time ---> ' + currentTime)
showOnPage('Gym time  ---> ' + gymClassStartTime)
showOnPage('Time Before Gym ---> ' + timeBeforeGym)
showOnPage('myTurntoDrive ---> ' + myTurnToDrive)
showOnPage('unplannedEvent ---> ' + unplannedEvent)
showOnPage('<--- End of global variable data --->')

// determine available time based on if I am driving or getting a drive
if (myTurnToDrive) {
  availableTime = timeBeforeGym - 0.25
} else {
  availableTime = timeBeforeGym - 0.15
}

// set variable for output message and list of things to do before gym
// list always includes coffee 
let message = ''
let list = 'Make and Drink Coffee, '

// display this on webpage
showOnPage('<b>Morning Tasks</b>')
showOnPage('___________________')

// logic for determining what things I can before the gym

if (availableTime > 1.5 || !unplannedEvent) {
  list = list + 'Mediate, Get Morning Sun, Make Green Drink'
  message = 'Love getting up early!'
} else if (availableTime < 0.75 || !unplannedEvent) {
  list = list + 'Mediate'
  message = 'After working out, get some sun and make green drink'
} else {
  list = list + 'Check Time'
  message = 'Unplanned event happen, just get back on track tomorrow'
}

// display list and message on the webpage 

showOnPage(list)
showOnPage(message)
showOnPage('Have a great day!!')