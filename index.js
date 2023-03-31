
var numOptions = document.querySelectorAll(".option").length;

for (var i = 0; i < numOptions; i++) {
  document.querySelectorAll(".option")[i].addEventListener("click", function random() {
    var selectedImage = this.alt
    var randomNum = Math.floor(Math.random() * 3) + 1;
    generateRandomNum(randomNum)
    removeImages(selectedImage)
    changeImagePath(selectedImage)
    winLose(selectedImage, randomNum)
  });
}

function generateRandomNum(randomNum) {
  var selectImage = "opponent" + randomNum + ".png";
  var imagePath = "images/" + selectImage;
  document.querySelectorAll(".computer-choice")[0].setAttribute("src", imagePath);
  return randomNum
}

function removeImages() {
  element = document.getElementById("user-choice");
  element.remove();
}

function changeImagePath(selectedImage) {
  var userSelectedImage = "user" + selectedImage + ".png";
  var selectedPath = "images/" + userSelectedImage;
  document.querySelector(".selected-option").setAttribute("src", selectedPath);
  var element = document.getElementById("sel-img");
  element.classList.remove("hidden");
}

function winLose(selectedImage, randomNum) {

  if (selectedImage == randomNum) {
    document.getElementById("result").innerHTML = "It's a Draw"
    document.getElementById("result").style.color = "yellow"
  } else if (selectedImage == 1 && randomNum == 3) {
    document.getElementById("result").innerHTML = "Rock smashes scissors You Win!"
    document.getElementById("result").style.color = "#66DE93"
  } else if (selectedImage == 3 && randomNum == 1) {
    document.getElementById("result").innerHTML = "Rock smashes scissors You lose"
    document.getElementById("result").style.color = "#ff3800"
  } else if (selectedImage == 1 && randomNum == 2) {
    document.getElementById("result").innerHTML = "Paper covers rock You lose"
    document.getElementById("result").style.color = "#ff3800"
  } else if (selectedImage == 2 && randomNum == 1) {
    document.getElementById("result").innerHTML = "Paper covers rock You Win!"
    document.getElementById("result").style.color = "#66DE93"
  } else if (selectedImage == 2 && randomNum == 3) {
    document.getElementById("result").innerHTML = "Scissors cuts paper You lose"
    document.getElementById("result").style.color = "#ff3800"
  } else if (selectedImage == 3 && randomNum == 2) {
    document.getElementById("result").innerHTML = "Scissors cuts paper You Win!"
    document.getElementById("result").style.color = "#66DE93"
  }

}

function restartClicked() {
  location.reload()
}




