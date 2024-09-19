document.body.style.border = "10px solid green";

// links are in class title may-blank loggedin

// connection is p title then tagline then ul comment element
// so comments are not immediate sibling but the next sibling

// comments are in bylink comments may-blank

const titles = document.querySelectorAll(".title.may-blank.loggedin");

const comments = document.querySelectorAll(".bylink.comments.may-blank");

titles.forEach((title) => {
    console.log(title);
});

const card = document.createElement("div");
const imageContainer = document.createElement("img");
let cursor = 0;

// Only need to iterate this with button clicks
imageContainer.src = titles[0].getAttribute("href");

imageContainer.alt = "test image";
imageContainer.style.maxWidth = "50vw";
imageContainer.style.maxHeight = "55vh";
imageContainer.style.objectFit = "contain";

card.style.maxWidth = "50vw";
card.style.border = "10px solid black";
card.style.maxHeight = "55vh";
card.style.margin = "auto";

document.body.innerHTML = "";

card.appendChild(imageContainer);

// button contianer
const buttonHolder = document.createElement("div");
buttonHolder.style.display = "flex";
buttonHolder.style.justifyContent = "space-between";

const previousButton = document.createElement("button");
previousButton.innerHTML = "Previous";

previousButton.onclick = function() {
    if (cursor === 0) return
    cursor = cursor - 1;
    imageContainer.src = titles[cursor].getAttribute("href");
    console.log("Back I go", titles.length, cursor);
    
}

const nextButton = document.createElement("button");
nextButton.innerHTML = "Next";

nextButton.onclick = function(){
    if (cursor === 30) return
    cursor = cursor + 1;
    imageContainer.src = titles[cursor].getAttribute("href");
    console.log("here I am", titles.length, cursor);
}

// Add buttons to button container
buttonHolder.appendChild(previousButton);
buttonHolder.appendChild(nextButton);

card.appendChild(buttonHolder);


document.body.appendChild(card);