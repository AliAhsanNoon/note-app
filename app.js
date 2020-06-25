const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv)  {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove notes from app list",
  builder: {
    title: {
      describe: " Remove Note Title ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Retrieve all  notes from list",
  builder: {
    title: {
      describe: " Note Title ",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: " Note Body ",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    console.log("Retreving lists from note-app list");
  },
});
