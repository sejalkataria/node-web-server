// var obj={name:'sejal'};
// var stringObj=JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);



// var personString='{"name":"sejal","age":21}';
// var person=JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

var fs=require('fs');
var originalNOte={title:"hiii",body:"some body"};
var originalNOteString=JSON.stringify(originalNOte);
fs.writeFileSync('notes.json',originalNOteString);
var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

