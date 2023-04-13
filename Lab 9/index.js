const openModal= document.querySelector (`.inputi`);
const modal= document.querySelector (`.modal`);
const closeModal= document.querySelector (`.fa-solid`);
const boton= document.querySelector (`.boton`);


openModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
   modal.classList.add(`modal--show`);
});



closeModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
   modal.classList.remove(`modal--show`);
});

function habilitar (){
    myInput= document.getElementById(`myInput`).value;
    val= 0;

    if(myInput == ""){
        val++;
    }
    if (val == 0){
        document.getElementById(`myButton`).disabled = false;
    } else{
        document.getElementById(`myButton`).disabled = true;
    }
}

document.querySelector (`.inputt`).addEventListener("keyup", habilitar);
document.getElementById("myButton").addEventListener (`click`,() =>{


});

const input = document.getElementById("myInput");
const button = document.getElementById("myButton");

input.addEventListener("input", function() {
  if (input.value.length > 0) {
    button.classList.add("enabled");
    button.removeAttribute("disabled");
  } else {
    button.classList.remove("enabled");
    button.setAttribute("disabled", true);
  }
});


 

document.getElementById("myButton").addEventListener(`click`, () => {
    const comment = document.createElement("p");
    comment.textContent = document.getElementById(`myInput`).value;
    modal.classList.remove(`modal--show`);
  });
  
  

  document.getElementById("myButton").addEventListener("click", function() {
    const commentText = document.getElementById("myInput").value;
    const commentContainer = document.getElementById("commentContainer");
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    
    const commentImage = document.createElement("img");
    commentImage.src  = "imaa/usua.png";
    commentImage.alt = "Usuario";
    commentElement.appendChild(commentImage);
    
    const commentUser = document.createElement("span");
    commentUser.textContent = "Andrea Andrade"; 
    commentElement.appendChild(commentUser);

    const commentContent = document.createElement("div");
    commentContent.className = "comment-content";
    commentContent.textContent = commentText;
    commentElement.appendChild(commentContent);

    commentContainer.appendChild(commentElement);
});

  
  function cleanInput() {
    document.getElementById("myInput").value = "";
}
closeModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
    cleanInput();
    modal.classList.remove(`modal--show`);
});

modal.onmouseleave = cleanInput;

modal.addEventListener('mouseleave', () => {
  button.classList.remove('enabled');
  button.setAttribute('disabled', true);
});



