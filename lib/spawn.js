const spawn = require('cross-spawn')

// 因为在 Windows 上，当我们执行 npm 时，我们实际执行的是 npm.cmd 批处理
// 而在 Windows 上， .cmd,  .bat 批处理是无法脱离 cmd.exe 这一解释器而单独运行的。
// 设置 shell 选项为 true 以隐式地调用 cmd

module.exports = (command, args = [], options = {}) => new Promise((resolve, reject) => {
    const cmd = spawn(command, args, { stdio: 'inherit', shell: true, cwd: '', ...options })
    console.log(cmd, 'cmd');
    cmd.on('close', code => {
        if (code !== 0) {
            return resolve(`${command} ${args.join(' ')}`)
        }
        resolve()
    })
})