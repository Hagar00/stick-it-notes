// create note function  
let count=0;
function CreateNote(noteTitle, noteBody){
    count+=1;
    // heddin no note div 
    document.getElementById("no-notes").classList.add("hidden");
    // create elements of ul 
    let li = document.createElement('li');
    let a = document.createElement('a');
    let h2 = document.createElement('h2');
    let xBtn = document.createElement('button');
    let p = document.createElement('p');

    // add class to x btn
    xBtn.classList.add('delete');

    // add att to a 
    a.setAttribute("href","#");

    // create text 
    let h2T =document.createTextNode(noteTitle);
    let xT = document.createTextNode("x");
    let pT = document.createTextNode(noteBody);

    // append content 
    h2.appendChild(h2T);
    xBtn.appendChild(xT);
    p.appendChild(pT);

    // append content to a
    a.appendChild(h2);
    a.appendChild(xBtn);
    a.appendChild(p);

    // append a to li 
    li.appendChild(a);

    // append li into ul 
    document.getElementById("notes").appendChild(li);
}
// create form function 
function createNoteFromInput(e){
    e.preventDefault();

    let noteTitle = document.getElementById("new-note-title-input").value;
    let noteBody = document.getElementById("new-note-body-input").value;
    console.log( noteTitle, noteBody);
    CreateNote(noteTitle , noteBody);

     noteTitle = document.getElementById("new-note-title-input").value = "";
     noteBody = document.getElementById("new-note-body-input").value = "";
   
}
// create remove function
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure delete it ..?? ")){
            let li= e.target.parentElement.parentElement;
            let ul= document.getElementById("notes");
            ul.removeChild(li); 
        }
    }
    count-=1;
    if(count <1 ){
        document.getElementById("no-notes").className="";
    }
}
document.getElementById("inputForm").addEventListener("submit", createNoteFromInput, false);
document.getElementById("notes").addEventListener("click", removeItem);

