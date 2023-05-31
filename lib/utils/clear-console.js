const readline = require('readline')

function clear() {
    // process.stdout：进程文件流
    // isTTY：是否为终端
    if (process.stdout.isTTY) {
        const blank = '\n'.repeat(process.stdout.rows)
        console.log(blank)
            // 将光标移动到相关 stream 中指定的位置
        readline.cursorTo(process.stdout, 0, 0)
            // 从光标向下的当前位置清除关联流
        readline.clearScreenDown(process.stdout)
    }
}

module.exports = clear