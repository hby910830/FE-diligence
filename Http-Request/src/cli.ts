#!/usr/bin/env node
import * as commander from "commander";
import {translate} from "./main";


const program = new commander.Command();
program.version('1.0.2')

program
  .name("fanyi")
  .usage("<word>")
  .arguments('<wold>')
  .action(wold => {
    translate(wold)
  })
  .parse(process.argv);