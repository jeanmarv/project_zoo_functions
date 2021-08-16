const { employees, species } = require('./data');
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

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
