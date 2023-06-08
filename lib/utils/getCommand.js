const path = require('path')

const fs = require('fs')

module.exports = () => {
    return fs.existsSync(path.join(process.env.APPDATA), 'npm', 'yarn') ? 'yarn' : 'npm'
}