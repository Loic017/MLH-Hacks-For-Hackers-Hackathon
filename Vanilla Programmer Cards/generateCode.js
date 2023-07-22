const generateButton = document.getElementById("generate-btn");

const cssCode = `
.card {
    width: 334px;
    height: 183px;
    border-radius: 26px;
    margin: 0 auto;
    transition: all 0.5s ease-in-out;
    /* margin-top: 20px; */
    display: flex;
    flex-direction: column;
    text-align: left;
    transition: transform 500ms;
}

.card h2 {
    margin-top: 20px;
    font-size: 24px;
}

.card p {
    font-size: 20px;
    font-weight: 400;
}

.card p,
h2 {
    padding: 0 35px;
}

.card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 17px;
}

.programmer-card-popout {
    z-index: -1;
}

#card-back {
    width: 334px;
    height: 300px;
    transition: transform 500ms;
}

#card-back h2 {
    margin-top: 20px;
    font-size: 24px;
}

#card-back a {
    margin-top: 20px;
    font-size: 16px;
    padding: 0 35px;
}
`;

const jsCode = `const card = document.getElementById("card");
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
`;

generateButton.addEventListener("click", function () {
    const htmlOut = document.getElementById("html-code");
    const jsOut = document.getElementById("js-code");
    const cssOut = document.getElementById("css-code");

    htmlOut.innerText = window.outputHTML;
    jsOut.innerText = jsCode;
    cssOut.innerText = cssCode;
});
