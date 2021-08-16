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
  if (options === undefined) {
    const exer10 = {}
      exerc10.Friday = "Open from 10am until 8pm",
      exerc10.Monday = "CLOSED", 
      exerc10.Saturday = "Open from 8am until 10pm", 
      exerc10.Sunday = "Open from 8am until 8pm", 
      exerc10.Thursday ="Open from 10am until 8pm", 
      exerc10.Tuesday = "Open from 8am until 6pm", 
      exerc10.Wednesday = "Open from 8am until 6pm"
  }
}

function getSchedule(dayName) {
  // seu código aqui
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
