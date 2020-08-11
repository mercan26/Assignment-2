var censory = require("censorify");
censory.addWord("dad");
console.log(censory.getWord());
console.log(censory.censor("Some very sad bad rad mad dad text"));
censory.addWord("dad");
console.log(censory.getWord());
console.log(censory.censor("A very dad shit day"));
