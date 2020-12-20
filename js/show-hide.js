const questions = document.getElementsByClassName("question");

function showAnswer() {
	const answer = this.nextElementSibling;
	const arrow = this.childNodes[1];

	if (answer.style.height === "") {
		arrow.style.transform = "rotate(180deg)";
		this.style.fontWeight = "700";
		answer.style.height = "max-content";

	} else {
		arrow.style.transform = "rotate(0deg)";
		this.style.fontWeight = "400";
		answer.style.height = "";
	}
};

const questionsLength = questions.length;
for (let i = 0; i < questionsLength; i++) {
	questions[i].addEventListener("click", showAnswer)
}
