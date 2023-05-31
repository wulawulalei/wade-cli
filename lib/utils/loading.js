const ora = require('ora')

const spinner = ora()

const { green } = require('./log')

const startLoad = (msg) => {
    spinner.text = msg
    green(msg)
    spinner.start()
}

const stopLoad = () => {
    spinner.stop()
}

module.exports = { startLoad, stopLoad }