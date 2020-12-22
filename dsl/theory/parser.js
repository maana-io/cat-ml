const nearley = require("nearley");
const grammar = require("./grammar.js");
const fs = require("fs").promises;

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const input = process.argv[2];
if (!input) {
  console.log("Please specify an input grammar file");
  return;
}
console.log(input);

(async () => {
  const raw = await fs.readFile(input, "utf8");

  parser.feed(raw);

  // parser.results is an array of possible parsings.
  console.log(JSON.stringify(parser.results, null, 2)); // [[[[ "foo" ],"\n" ]]]
})();
