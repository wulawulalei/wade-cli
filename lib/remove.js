const fs = require('fs');

const path = require('path')

function remove(filepath) {
    if (fs.existsSync(filepath)) {
        if (fs.statSync(filepath).isFile()) {
            fs.unlinkSync(filepath)
        } else {
            const cwds = fs.readdirSync(filepath).map(cwd => path.join(filepath, cwd))
            cwds.map(cwd => {
                remove(cwd)
            });
            fs.rmdirSync(filepath)
        }
    } else {
        console.log('不存在该路径的文件');
    }
}

// 带有Sync后缀是同步函数，似乎都没有回调函数
// 删除文件夹之前必须先把文件夹下的文件删掉，否则直接删除文件夹会报错

module.exports = remove