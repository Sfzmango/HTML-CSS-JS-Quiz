// changes current box to the next box down the sibling list
function nextPrompt() {
    var currentBox = document.querySelector(".box");
    currentBox.style.display = "none";
    var nextBox = currentBox.nextElementSibling;
    nextBox.style.display = "block";
};

