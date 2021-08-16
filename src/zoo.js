const { employees, species, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const exerc1 = (id, index) => id.id === ids[index];
  const speciesID = species.filter(exerc1);
  return speciesID;
}

function getAnimalsOlderThan(animal, age) {
  const exerc2 = species.find((specie) => animal === specie.name);
  const idade = exerc2.residents.every((ages) => age <= ages.age);
  return idade;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((nom) => nom.firstName === employeeName || nom.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const exerc4 = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return exerc4;
}

function isManager(id) {
  const exerc5 = (idManager) => idManager.managers.includes(id);
  return employees.some(exerc5);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const exerc6 = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(exerc6);
}

function countAnimals(specie) {
  if (specie === undefined) {
    const animals = {};
    species.forEach((exerc7) => {
      animals[exerc7.name] = exerc7.residents.length;
    });
    return animals;
  }
  const animalName = species.filter((name) => name.name === specie);
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
  };
  if (dayName === undefined) {
    return exerc10;
  }
  return { [dayName]: exerc10[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employeee = employees.find((exerc11) => exerc11.id === id);
  const especie = species.find((callback) => callback.id === employeee.responsibleFor[0]);
  const maisVelho = especie.residents.sort((animal1, animal2) => animal2.age - animal1.age);
  return Object.values(maisVelho[0]);
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
