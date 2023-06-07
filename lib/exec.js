const { exec } = require('child_process')

module.exports = (command, options = {}) => new Promise((resolve, reject) => {
    exec(command, { stdio: 'inherit', shell: true, cwd: '', ...options }, (err, stdout) => {
        if (err) reject(err)
        resolve(stdout)
    })
})