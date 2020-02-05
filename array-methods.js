const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets");

const renderPlanets = () => {
    planets.forEach(planet => {
        planetEl.innerHTML += `
                    <h2>${planet}</h2>
        `
    });
};
renderPlanets();
/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
`toUpperCase()` method on strings.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const newPlanets = planets.map(planets => {
    return planets[0].toUpperCase() + planets.slice(1)
})
console.log(newPlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const filteredPlanets = planets.filter(planet => {
    let planetsWithLetterE = false
    
    if (planet.includes('e')) {
        planetsWithLetterE = true
    }
    
    return planetsWithLetterE
})
console.log(filteredPlanets)

const letter = 'e';

console.log(`The letter ${letter} is in all of the planets names: ${planets.includes(letter)}`)