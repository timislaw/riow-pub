// My Daily Decision
// One of the most common things I do it figure out what I can get done before
// heading to the gym for my workout.

// set global variables for decision making
// Time in this code is expressed in the following way: 1.5 would be 1 hour and 30 minutes
const daily = [
  {
    currentTime: 7,
    gymClassStartTime: 9,
    myTurnToDrive: true,
    unplannedEvent: false,
    day: 'Monday',
  },
  {
    currentTime: 7,
    gymClassStartTime: 8.5,
    myTurnToDrive: false,
    unplannedEvent: true,
    day: 'Tuesday',
  },
  {
    currentTime: 6,
    gymClassStartTime: 9,
    myTurnToDrive: false,
    unplannedEvent: false,
    day: 'Wednesday',
  },
  {
    currentTime: 6.5,
    gymClassStartTime: 9,
    myTurnToDrive: true,
    unplannedEvent: false,
    day: 'Thursday',
  },
  {
    currentTime: 5,
    gymClassStartTime: 9,
    myTurnToDrive: true,
    unplannedEvent: false,
    day: 'Friday',
  },
];

const formatOutput = function (text, heading) {
  showOnPage(`<b>${heading}</b>`);
  showOnPage(text);
  showOnPage(`___________________`);
};

const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
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

const processDaily = function (obj) {
  let timeBeforeGym = obj.gymClassStartTime - obj.currentTime;
  if (obj.myTurnToDrive) {
    availableTime = timeBeforeGym - 0.25;
  } else {
    availableTime = timeBeforeGym - 0.15;
  }
  variableData = `Day ---> ${obj.day} <br>
                    Current Time ---> ${obj.currentTime} <br>
                    Gym time  ---> ${obj.gymClassStartTime} <br>
                    Time Before Gym ---> ${timeBeforeGym} <br>
                    My Turn to Drive ---> ${obj.myTurnToDrive} <br>
                    Did unplanned event happen --->${obj.unplannedEvent}<br>`;

  formatOutput(
    variableData,
    `<b>This output is based on the following variable data:</b><br>`
  );
  decision = determineList(availableTime, obj.unplannedEvent);
  formatOutput(`${decision}`, 'Things to do before going to GYM');
};

const loopOverDaily = function () {
  daily.forEach(function (obj) {
    processDaily(obj);
  });
};

loopOverDaily();