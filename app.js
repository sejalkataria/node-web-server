console.log('starting app.js');
const fs = require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes = require('./notes.js');
const titleOptions={
    description:'Title of note',
    demand:true,
    alias:'t'
};
const bodyOptions={
    dscription:'body of the note',
    demaned:true,
    alias:'b'
}
var argv=yargs
.command('add','Add new note',{
title:titleOptions,
body:bodyOptions
})
.command('list','list all note')
.command('read','read all note',{
    title:titleOptions
})
.command('remove','remove a note',{
    title:titleOptions
})
.help()
.argv;
var command=argv._[0];

if(command==='add'){
 var note=notes.addNote(argv.title,argv.body);
 if(note){
console.log("note created");
notes.logNote(note);
 }else{
console.log("title already taken");
 }

}
else if(command==='list'){
   var allNotes=notes.getAll();
   console.log(`printing ${allNotes.length} note(s).`);
   allNotes.forEach((note)=>notes.logNote(note));
}else if(command==='read'){
   var note=notes.getNode(argv.title);
   if(note){
       console.log("note found");
       notes.logNote(note);

   }else{
       console.log("note not found");
   }
}else if(command==='remove'){
    var noteREmoved=notes.removeNode(argv.title);
    var message=noteREmoved ? "removed note" : "note not found";
    console.log(message);
}
else{
    console.log("command not recognized");
}
