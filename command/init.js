const { startLoad, stopLoad } = require('../lib/utils/loading')

const clear = require('../lib/utils/clear-console')

function download(name) {
    startLoad(name)
        // return new Promise()
}

async function init(name, url) {
    clear()
    await download(name, url)
    stopLoad()
    process.exit()
}
module.exports = init