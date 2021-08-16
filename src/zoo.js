const { employees, species, hours, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(ids) {

}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const exerc6 = {};
  exerc6.id = id;
  exerc6.firstName = firstName;
  exerc6.lastName = lastName;
  exerc6.managers = managers;
  exerc6.responsibleFor = responsibleFor;
  employees.push(exerc6);
}

function countAnimals(specie) {
  if (specie === undefined) {
    const animals = {};
    species.forEach((exerc7) => {
       animals[exerc7.name] = exerc7.residents.length;
    })
    return animals;
  }
  const animalName = species.filter(( name ) => name.name === specie);
  return animalName[0].residents.length;
}

function calculateEntry(entrants = {}) {
  let accumulator = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultos = Adult * prices.Adult;
  const seniors = Senior * prices.Senior;
  const criancas = Child * prices.Child;
  accumulator = criancas + seniors + adultos;
  return accumulator;
}

function getAnimalMap(options) {
  //
}

function getSchedule(dayName) {
  const exerc10 = {
    Friday: 'Open from 10am until 8pm',
    Monday: 'CLOSED',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Thursday: 'Open from 10am until 8pm',
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
  }
  if (dayName === undefined){
    return exerc10
    };
  return { [dayName]: exerc10[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  prices.Adult = parseFloat(Math.fround(prices.Adult * ((percentage / 100) + 1)).toPrecision(4));
  prices.Child = parseFloat(Math.fround(prices.Child * ((percentage / 100) + 1)).toPrecision(4));
  prices.Senior = parseFloat(Math.fround(prices.Senior * ((percentage / 100) + 1)).toPrecision(4));
  return prices;
  // estava dando erro antes pois recebia uma string, o parsefloat transoforma em numero, eu acho?
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
