const ora = require('ora')

const spinner = ora()

const { green } = require('./log')

let message

const startLoad = (msg) => {
    spinner.text = msg
    green(msg)
    if (message) {
        spinner.stopAndPersist({
            text: message,
        })
    }
    spinner.start()
    message = msg
}

const stopLoad = () => {
    if (message) {
        spinner.stopAndPersist({
            text: message,
        })
    } else {
        spinner.stop()
    }
    message = null
}

module.exports = { startLoad, stopLoad }