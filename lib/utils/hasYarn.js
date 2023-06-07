const fs = require('fs')

const path = require('path')

module.exports = cwd => {
    return fs.existsSync(path.join(cwd, 'yarn.lock'))
}