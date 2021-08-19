import App, { printToday} from './App.js'
// import * as constants from './constants.js'
import { DOMAIN_NAME as DN, PORT } from './constants.js'
// import App from './App.js'


const $body = document.querySelector('body')

// $body.innerHTML = $body.innerHTML + JSON.stringify(constants, null, 2)
$body.innerHTML = $body.innerHTML + `<div>${DN}</div>`
$body.innerHTML = $body.innerHTML + `<div>${PORT}</div>`

// new App();
printToday()