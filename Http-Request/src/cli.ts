import * as commander from "commander";

const program = new commander.Command();
program.version('0.0.1')

program
  .name("fanyi")
  .usage("<word>")
  .arguments('<wold>')
  .action(wold => {
    console.log(wold);
  })
  .parse(process.argv);