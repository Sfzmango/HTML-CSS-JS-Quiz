var promptNum = 2;

// changes current box to the next box down the sibling list
function nextPrompt() {
    var currentBox = document.body.children[promptNum];
    currentBox.style.display = "none";
    var nextBox = currentBox.nextElementSibling;
    nextBox.style.display = "block";
    promptNum++;
    return promptNum;
};
