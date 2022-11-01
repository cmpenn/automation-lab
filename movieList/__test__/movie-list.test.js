const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {By} = require('selenium-webdriver')

const {addMovie, deleteMovie, crossOffMovie, uncrossMovie} = require('../functions/function.js')

beforeAll(async () =>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () =>{
    await driver.quit()
})

test('add a movie', async () =>{
    await addMovie(driver)
    await driver.sleep(5000)
})

test('cross out movie', async () =>{
    await crossOffMovie(driver)
    await driver.sleep(5000)
})

test('uncross movie', async ()=>{
    await uncrossMovie(driver)
    await driver.sleep(5000)
})

test('delete movie', async () =>{
    await deleteMovie(driver)
    await driver.sleep(5000)
})

test('notified', async () =>{
    expect(driver.findElement(By.xpath('//aside'))).toBeTruthy()
})