// create note function  
let count= Number(window.localStorage.getItem("count"));
if(!count){
    window.localStorage.setItem("count","0");
}
function CreateNote(noteTitle, noteBody){
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
    count +=1;
    window.localStorage.setItem("count",count);
    while (window.localStorage.getItem(noteTitle)) {
        noteTitle = noteTitle + "-1";
      }
     window.localStorage.setItem(noteTitle, noteBody);
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
    window.localStorage.setItem("count", count);
    window.localStorage.removeItem(e.target.previousElementSibling.innerText);
    if(count <1 ){
        document.getElementById("no-notes").className="";
    }
}
// fetch data from local storage 
for (i = 0; i < count + 1; i++) {
    console.log(window.localStorage.key(i));
    let noteTitle = window.localStorage.key(i);
    let noteBody = window.localStorage.getItem(noteTitle);
    if (noteTitle !== "count" && noteTitle) {
        CreateNote(noteTitle, noteBody);
    }
  }

document.getElementById("inputForm").addEventListener("submit", createNoteFromInput, false);
document.getElementById("notes").addEventListener("click", removeItem);

