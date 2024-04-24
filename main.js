const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

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
        const clone = template.content.cloneNode(true)
        clone.querySelector("h3").textContent = pet.name
        wrapper.appendChild(clone)
    })
    document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()