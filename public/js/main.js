let div = document.getElementById("content");

function maFonction(e){
    console.log(e);

    console.log(e.target.style = "border: solid red;");
}

div.addEventListener('click',maFonction);


