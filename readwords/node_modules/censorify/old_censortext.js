var censoredWords = [ "sad", "bad", "mad" ];
var customCensoredWords = [];
function censor(instr){


    for (idx in censoredWords) {
	instr = instr.replace(censoredWords[idx], "********");
    }
    for (idx in customCensoredWords) {
	instr = instr.replace(censoredWords[idx], "********");
    }
    return instr;
}

function addWord(word){

}
