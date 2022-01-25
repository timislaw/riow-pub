// showOnPage will output on the webpage any content we provide to it.

const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

// My Daily Decision
// One of the most common things I do it figure out what I can get done before
// heading to the gym for my workout.

// set global variables for decision making
// Time in this code is expressed in the following way: 1.5 would be 1 hour and 30 minutes

const formatOutput = function (text, heading) {
  showOnPage(`<b>${heading}</b>`);
  showOnPage(`___________________`);
  showOnPage(text);
  showOnPage(`___________________`);
};

const determineList = function (availableTime, unplannedEvent) {
  let message = '';
  let list = 'Make and Drink Coffee, ';
  if (unplannedEvent) {
    list = list + 'Check Time';
    message = 'Unplanned event happen, just get back on track tomorrow';
  } else if (availableTime >= 1.5) {
    list = list + 'Mediate, Get Morning Sun, Make Green Drink';
    message = 'Love getting up early!';
  } else if (availableTime >= 0.7 && availableTime <= 1.4) {
    list = list + 'Mediate, Get Morning Sun';
    message = 'That green drink will taste so good after the workout!';
  } else {
    list = list + 'Mediate, ';
    message = 'Mediation is important!';
  }
  return `${list} <br> ${message}`;
};

const setupData = function (
  currentTime,
  gymClassStartTime,
  myTurnToDrive,
  unplannedEvent,
  day
) {
  let timeBeforeGym = gymClassStartTime - currentTime;
  if (myTurnToDrive) {
    availableTime = timeBeforeGym - 0.25;
  } else {
    availableTime = timeBeforeGym - 0.15;
  }
  variableData = `Day ---> ${day} <br>
                  Current Time ---> ${currentTime} <br>
                  Gym time  ---> ${gymClassStartTime} <br>
                  Time Before Gym ---> ${timeBeforeGym} <br>
                  My Turn to Drive ---> ${myTurnToDrive} <br>
                  Did unplanned event happen --->${unplannedEvent}<br>`;

  formatOutput(
    variableData,
    `<b>This output is based on the following variable data:</b><br>`
  );
  list = determineList(availableTime, unplannedEvent);
  formatOutput(list, 'Things to do before going to GYM');
};

setupData(7, 9, true, false, 'Monday');
setupData(7, 8.5, false, true, 'Tuesday');
setupData(6, 9, false, false, 'Wednesday');
setupData(6.5, 9, true, false, 'Thursday');
setupData(6.5, 9, true, false, 'Friday');
