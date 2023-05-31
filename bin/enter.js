#!/usr/bin/env node
 // 告诉Unix和Linux系统这个文件中的代码用node可执行程序去运行它

const { Command } = require('commander');
const program = new Command()

const create = require('../command/create')
const init = require('../command/init')
const ls = require('../command/ls')

program.version('1.0.0', '-v, --version');

program
    .option('-w, --wade-type <name>', 'wade option function -- wade')
    // 参数：命令名字，命令描述，执行的函数，函数参数
    // 自定义命令标识，必须参数
    // 一长一断的标识，使用逗号、空格或|分隔
    // 标识后面可以跟参数，<>为必须参数，[]为可选参数，如-t --test <type></type>


program.command('create')
    .arguments('<name> [options...]')
    .description('create a new project step by step') // 用来描述命令的一些提示、说明性的语句，我们在使用help命令时会打印出这些相关的描述
    .action((name, options) => {
        create(name)
    })

program.command('init')
    .arguments('<app-name>')
    .description('create a new project one-step') // 用来描述命令的一些提示、说明性的语句，我们在使用help命令时会打印出这些相关的描述
    .option('-t, --template [url]', 'assign a url as template')
    .action((name, { template: url }) => {
        init(name, url)
    })

program.command('ls')
    .description('log the package message')
    .action(() => {
        ls()
    })

program
    .helpOption('-h, --help', 'output usage information')

// 在执行相关的命令后，要在控制台打印相关的信息的话，必须在最后执行以下这句代码。
program.parse(process.argv)