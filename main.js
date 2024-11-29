const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";

    
    notesContainer.appendChild(inputBox).appendChild(img);

    
    

    //please work
    // let newText = document.createElement("p");
    // newText.textContent = "Designed by M.A"
    // newText.className = "additional-text"

    // notesContainer.appendChild(newText);

    // if (!document.querySelector(".designed-text")){
    //     let footerText = document.createElement("p");
    //     footerText.textContent = "Designed by M.A";
    //     footerText.className = "designed-text";

    //     notesContainer.appendChild(footerText);
    // }

   
})

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
} )

