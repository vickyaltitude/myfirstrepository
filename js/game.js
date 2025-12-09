//alert,prompt,confirm

function RockPaperScissor() {
  let UserChoice = prompt("Enter the Rock Paper Scissor");
  // console.log(UserChoice)
  let gameArr = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);

  if (
    UserChoice.toLowerCase() !== "rock" &&
    UserChoice.toLowerCase() !== "paper" &&
    UserChoice.toLowerCase() !== "scissor"
  ) {
    let askAgain = confirm("invalid input\n Do you want to play again? ");
    if (askAgain == true) {
      RockPaperScissor();
    } else {
      return;
    }
  }

  if (UserChoice.toLowerCase() === gameArr[computerChoice]) {
    alert(
      `Your Selected ${UserChoice}\n computer Selected ${gameArr[computerChoice]}\n Game is tie`
    );
  } else if (
    gameArr[computerChoice] === "Rock" &&
    UserChoice.toLowerCase() === "scissor"
  ) {
    alert(
      `Your Selected ${UserChoice}\n computer Selected ${gameArr[computerChoice]}\n Computer Win`
    );
  } else if (
    gameArr[computerChoice] === "Scissor" &&
    UserChoice.toLowerCase() === "paper"
  ) {
    alert(
      `Your Selected ${UserChoice}\n computer Selected ${gameArr[computerChoice]}\n Computer Win`
    );
  } else if (
    gameArr[computerChoice] === "Paper" &&
    UserChoice.toLowerCase() === "rock"
  ) {
    alert(
      `Your Selected ${UserChoice}\n computer Selected ${gameArr[computerChoice]}\n Computer Win`
    );
  } else {
    alert(
      `Your Selected ${UserChoice}\n computer Selected ${gameArr[computerChoice]}\n You Win`
    );
  }
  return;
}

RockPaperScissor();
