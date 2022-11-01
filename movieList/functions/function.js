const {By} = require('selenium-webdriver')

// myMovie = 'Batman'

// the functions
const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('batman')

    // select the add button
    await driver.findElement(By.xpath('//button')).click()

    // find the li element because we want to check if the movie title is added there
    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    // expect this to be true
    expect(displayed).toBeTruthy()
}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()
}

const uncrossMovie = async (driver) =>{
    await driver.findElement(By.xpath('//span')).click()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//button[text() = "x"]')).click()
}


module.exports = {
    addMovie,
    crossOffMovie,
    uncrossMovie,
    deleteMovie
}