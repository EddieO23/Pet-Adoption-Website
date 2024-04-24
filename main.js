// DYNAMIC WEATHER FEATURE
async function start() {
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/LOT/73,70/forecast")
    const weatherData = await weatherPromise.json()
    const ourTemperature = weatherData.properties.periods[0].temperature

    document.querySelector("#temperature-output").textContent = ourTemperature
}
start()

// DYNAMIC PETS AREA
async function petsArea() {
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
    const petsData = await petsPromise.json()
    petsData.forEach(pet => {
        console.log(pet.species)
    })
}

petsArea()