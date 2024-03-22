
const p1 = {
    score: 0,
    button: document.querySelector(`#p1Button`),
    display: document.querySelector(`#p1Display`)
}

p1.button.addEventListener(`click`, () => {
    updateScores(p1, p2);
});

const p2 = {
score: 0,
 button: document.querySelector(`#p2Button`),
 display: document.querySelector(`#p2Display`)
}

p2.button.addEventListener(`click`, () => {
    updateScores(p2, p1);
});

const resetButton = document.querySelector(`#reset`);
let winningScore = 3;
const winningScoreSelect = document.querySelector(`#playto`);
let isGameOver = false;

function updateScores(player, otherPlayer) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add(`has-text-success`);
            otherPlayer.display.classList.add(`has-text-danger`);
            player.button.disabled = true;
            otherPlayer.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

resetButton.addEventListener(`click`, reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove(`has-text-success`, `has-text-danger`);
        p.button.disabled = false;
    }
}

winningScoreSelect.addEventListener(`change`, () => {
    winningScore = parseInt(event.target.value);
    console.log(winningScore);
    reset();
});



