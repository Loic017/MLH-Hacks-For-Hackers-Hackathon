const card = document.getElementById("card");
const cardFlipped = document.getElementById("card-back");
const clickMe = document.getElementById("click-text");
card.addEventListener("click", function () {
    card.style.transform = "rotateY(20deg)";
    clickMe.style.display = "none";
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
        clickMe.style.display = "block";
    }, 400);
    setTimeout(function () {
        clickMe.style.display = "block";
    }, 500);
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

const cardName = document.getElementById("card-name");
const cardTitle = document.getElementById("card-title");

const backName = document.getElementById("back-name");
const backTitle = document.getElementById("back-title");

const backTechnologies = document.getElementById("back-technologies");

const backLinkedIn = document.getElementById("back-linkedin");

const backGithub = document.getElementById("back-github");

const backTwitter = document.getElementById("back-twitter");

let outputHTML;
submitButton.addEventListener("click", function () {
    editCard.style.display = "none";
    cardName.innerHTML = nameInput.value;
    cardTitle.innerHTML = titleInput.value;

    backName.innerHTML = nameInput.value;
    backTitle.innerHTML = titleInput.value;

    backTechnologies.innerText = technologiesInput.value;

    backLinkedIn.href = linkedin.value;

    backGithub.href = github.value;

    const backTwitter = document.getElementById("back-twitter");
    backTwitter.href = twitter.value;

    outputHTML = document.getElementById(
        `
        <div class="card-container">
        <div
            id="card"
            class="card"
            style="
                background: rgb(5, 200, 96);
                background: linear-gradient(
                    199deg,
                    rgba(5, 200, 96, 1) 16%,
                    rgba(11, 195, 97, 1) 57%,
                    rgba(0, 41, 19, 1) 100%
                );
            "
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.8"
            data-tilt-reverse="true"
            data-tilt-scale="1.1"
        >
            <h2 id="card-name" class="card-name">${nameInput.value}</h2>
            <p id="card-title" class="card-title">${titleInput.value}</p>
        </div>
        <div class="click-on-me" id="click-text">
            <p>Click on me</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="17"
                viewBox="0 0 33 17"
                fill="none"
            >
                <path
                    d="M0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3ZM33 8.5L27.6991 10.7877L32.3307 14.2346L33 8.5ZM3.02415 3.1535C7.53929 17.1504 22.5434 20.5155 30.6649 12.4659L29.9609 11.7556C22.4566 19.1936 8.30104 16.2546 3.97585 2.8465L3.02415 3.1535Z"
                    fill="white"
                />
            </svg>
        </div>
        <div
            class="card"
            id="card-back"
            style="
                background: rgb(1, 48, 23);
                background: linear-gradient(
                    199deg,
                    rgb(2, 69, 33) 16%,
                    rgb(3, 61, 30) 57%,
                    rgba(0, 41, 19, 1) 100%
                );
                display: none;
            "
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.8"
            data-tilt-reverse="true"
            data-tilt-scale="1.1"
        >
            <h2 id="back-name" class="popout-name">${nameInput.value}</h2>
            <p id="back-title" class="popout-title">
                ${titleInput.value}
            </p>
            <h2 class="technologies-popout-header">Technologies</h2>
            <p id="back-technologies">${technologiesInput.value}</p>
            <h2 class="links-popout-header">Links</h2>
            <div class="links-popout">
                <a id="back-linkedin" href="${linkedin.value}">LinkedIn</a>
                <a id="back-github" href="${github.value}">GitHub</a>
                <a id="back-twitter" href="${twitter.value}">Twitter</a>
            </div>
        </div>
    </div>
    
    <script src="card.js"></script>
    <script type="text/javascript" src="vanilla-tilt.js"></script>
    <link rel="stylesheet" href="card.css" />
    `
    );
});
