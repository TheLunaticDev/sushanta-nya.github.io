const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/scarlet-devil.jpg") {
        myImage.setAttribute("src", "images/remilia-scarlet.jpg");
        myImage.setAttribute("alt", "Remilia Scarlet smilia with a beautiful moon behind.");
    }
    else {
        myImage.setAttribute("src", "images/scarlet-devil.jpg");
        myImage.setAttribute("alt", "Scarlet Devil with her timeless maid, picking flowers inside a garden.");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();    
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Remilia welcomes you, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Remilia welcomes you, ${myName}`;
}

myButton.onclick() = () => {
    setUserName();
};