const adviceID = document.querySelector("#adviceID");
const adviceResults = document.querySelector("#adviceResults");
const button = document.querySelector("#get-data");

button.addEventListener("click", () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((adviceData) => {
            const AdviceObj = adviceData.slip;
            adviceID.innerHTML = `${AdviceObj.id}`;
            adviceResults.innerHTML = `${AdviceObj.advice}`;
        })
        .catch((error) => {
            console.log(error);
        });
}
