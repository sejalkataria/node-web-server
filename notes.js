console.log("starting notes.js");
const fs=require('fs');
var fetchNotes=()=>{
    try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
       }
       catch(e){
           return [];
       }
};
var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote=(title,body)=>{
   var notes=fetchNotes();
   var note={title,body};
   
   var duplicateNotes=notes.filter((note)=>note.title === title);
   if(duplicateNotes.length ===0){
    notes.push(note);
    saveNotes(notes);
    return note;
   }
   };
var getAll=()=> {
return fetchNotes();
};
var getNode=(title) =>{
   var notes=fetchNotes();
   var filterNotes=notes.filter((note)=>note.title === title);
   return filterNotes[0];

};
var removeNode=(title)=>{
var notes=fetchNotes();
var filterNotes=notes.filter((node)=>node.title !==title);
saveNotes(filterNotes);
return notes.length!==filterNotes.length;
};

var logNote=(note)=>{
console.log("------");
console.log(`Title : ${note.title}`);
console.log(`Body  : ${note.body}`);
};
module.exports={
    addNote,
    getAll,
    getNode,
    removeNode,
    logNote
};
