import * as commander from "commander";
import {translate} from "./main";


const program = new commander.Command();
program.version('0.0.1')

program
  .name("fanyi")
  .usage("<word>")
  .arguments('<wold>')
  .action(wold => {
    translate(wold)
  })
  .parse(process.argv);