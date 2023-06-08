exports.frameOption = {
    type: 'list',
    message: 'choose the project language',
    name: 'frame',
    choices: [{
        name: 'vue2',
        value: 'vue2'
    }, {
        name: 'vue3',
        value: 'vue3'
    }, {
        name: 'react',
        value: 'react'
    }, ],
    default: 0
}

exports.dfOption = {
    type: 'list',
    name: 'preset',
    message: 'Please pick a preset',
    choices: [{
        name: 'default(babel、eslint)',
        value: 0
    }, {
        name: 'Manually select features',
        value: 1
    }]
}

exports.needOption = {
    type: 'checkbox',
    name: 'need',
    message: 'choose the features needed for your project',
    choices: [{ name: 'Babel', value: 'babel' }, { name: 'Typescript', value: 'ts' }, { name: 'Router', value: 'router' }, { name: 'VueX', value: 'vuex' }, { name: 'CSS Pre-processors', value: 'css' }, { name: 'Eslint', value: 'eslint' }, ]
}

exports.routerOption = {
    type: 'confirm',
    name: 'router',
    message: 'Use hash mode for router?(Y/N)',
    default: 'Y'
}

exports.cssOption = {
    type: 'list',
    name: 'css',
    message: 'pick a css pre-processor',
    choices: [{ name: 'scss', value: 'scss' }, { name: 'sass', value: 'sass' }, { name: 'less', value: 'less' }, { name: 'stylus', value: 'stylus' }, ]
}