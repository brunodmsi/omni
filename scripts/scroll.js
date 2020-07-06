/* eslint-disable */

const body = document.querySelector('body, html');

const svgStart = document.querySelector('#start-continue'); 
const svgContinue = document.querySelector('#concept-continue'); 
const svgObjective = document.querySelector('#objective-continue'); 

const startDiv = document.querySelector('.start');
const conceptDiv = document.querySelector('.concept-container');
const objectiveDiv = document.querySelector('.objectives-container');
const groupsDiv = document.querySelector('.groups-container');

svgStart.addEventListener('click', () => {
  conceptDiv.scrollIntoView({
    behavior: 'smooth'
  })
});

svgContinue.addEventListener('click', () => {
  objectiveDiv.scrollIntoView({
    behavior: 'smooth'
  })
});

svgObjective.addEventListener('click', () => {
  groupsDiv.scrollIntoView({
    behavior: 'smooth'
  })
});

toStartButton.addEventListener('click', () => {
  startDiv.scrollIntoView({
    behavior: 'smooth'
  })
});

toConceptButton.addEventListener('click', () => {
  conceptDiv.scrollIntoView({
    behavior: 'smooth'
  })
})

toObjectiveButton.addEventListener('click', () => {
  console.log('oi')
  objectiveDiv.scrollIntoView({
    behavior: 'smooth'
  })
})

toGroupsButton.addEventListener('click', () => {
  groupsDiv.scrollIntoView({
    behavior: 'smooth'
  })
})
