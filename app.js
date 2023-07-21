const card = document.getElementById("card");
const cardFlipped = document.getElementById("card-back");
card.addEventListener("click", function () {
    card.style.transform = "rotateY(20deg)";
    setTimeout(function () {
        card.style.display = "none";
        cardFlipped.style.display = "block";
        cardFlipped.style.transform = "scale(1.06)";
    }, 400);
});

cardFlipped.addEventListener("click", function () {
    cardFlipped.style.transform = "rotateY(20deg)";
    setTimeout(function () {
        cardFlipped.style.display = "none";
        card.style.display = "block";
        card.style.transform = "scale(1.06)";
    }, 400);
});

const editCard = document.getElementById("edit-card");
const editButton = document.getElementById("edit");
editButton.addEventListener("click", function () {
    editCard.style.display = "block";
});

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", function () {
    editCard.style.display = "none";
});

const submitButton = document.getElementById("submit-edit");
const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const technologiesInput = document.getElementById("technologies");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const twitter = document.getElementById("twitter");
submitButton.addEventListener("click", function () {
    editCard.style.display = "none";
    const cardName = document.getElementById("card-name");
    const cardTitle = document.getElementById("card-title");
    cardName.innerHTML = nameInput.value;
    cardTitle.innerHTML = titleInput.value;

    const backName = document.getElementById("back-name");
    const backTitle = document.getElementById("back-title");
    backName.innerHTML = nameInput.value;
    backTitle.innerHTML = titleInput.value;

    const backTechnologies = document.getElementById("back-technologies");
    backTechnologies.innerText = technologiesInput.value;

    const backLinkedIn = document.getElementById("back-linkedin");
    backLinkedIn.href = linkedin.value;

    const backGithub = document.getElementById("back-github");
    backGithub.href = github.value;

    const backTwitter = document.getElementById("back-twitter");
    backTwitter.href = twitter.value;
});
