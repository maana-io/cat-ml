# CatML DSLs

## Nearley.js

- [Homepage](https://nearley.js.org/)
- [VS Code extension](https://github.com/pmkary/nearley-vscode)

### nearley in 3 steps

#### Step 1: Describe your grammar using the [nearley syntax](https://nearley.js.org/docs/grammar) in a file called grammar.ne

```text
main      -> (statement "\n"):+
statement -> "foo" | "bar"
```

#### Step 2: Compile the grammar to a JavaScript module

```bash
nearleyc grammar.ne -o grammar.js
```

#### Step 3: Parse

```js
const nearley = require("nearley");
const grammar = require("./grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed("foo\n");

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]
```

### Install

```bash
npm i -g nearley
```

### Tools

`nearleyc`

`nearley-test`

`nearley-unparse`

`nearley-railroad`
