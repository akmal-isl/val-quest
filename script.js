document.getElementById('music-btn').addEventListener('click', function () {
    var audio = document.getElementById('bg-music');
    if (audio.paused) {
      audio.play();
      this.textContent = '🔇 Выключить музыку';
    } else {
      audio.pause();
      this.textContent = '🎵 Включить музыку';
    }
  });
  
  // Функция для создания падающих сердечек
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHeart, 300);
  
function checkCode() {
    var input = document.getElementById("codeInput").value;
    var errorMessage = document.getElementById("errorMessage");

    if (input === "14022025") {
      window.location.href = "next-page.html"; // Переход на следующую страницу
    } else {
      errorMessage.textContent = "Неправильный код! Попробуйте еще раз.";
      errorMessage.style.color = "red";
    }
}

function showHint() {
  var hintMessage = document.getElementById("hintMessage");
  hintMessage.textContent = "Записка находиться за тем что отражает экран учительского компьютера";
  hintMessage.style.color = "#e91e63";
} 
function showHint2() {
  var hintMessage = document.getElementById("hintMessage2");
  hintMessage.textContent = "За фигней на стене которую используют для проектора";
  hintMessage.style.color = "#e91e63";
} 