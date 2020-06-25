const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove notes from app list",
  handler: function () {
    console.log("Removing note from note-app list");
  }
});

yargs.command({
  command: "list",
  describe: "Retrieve all  notes from list",
  builder: {
    title: {
      describe: " Note Title ",
      demaandOption: true,
      type: "string",
    },
    body: {
      describe: " Note Body ",
      demaandOption: true,
      type: "string",
    }
  },
  handler: function () {
    console.log("Retreving lists from note-app list");
  },
});

console.log(yargs.argv);

let msg = chalk.green.inverse.bold("Success");

console.log(msg);
