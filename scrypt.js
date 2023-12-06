


function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 1e16).toString().padStart(16, '0');
    document.getElementById('inputText').value = randomNumber;
    changeСText(randomNumber);
}

function changeСText(newText) {
    var СElement = document.getElementById('СElement');
    if (/^\d{16}$/.test(newText)) {
        newText = newText.replace(/(\d{4})/g, '$1 ');
        СElement.textContent = newText;
    } else {
        СElement.textContent = "Текст повинен містити точно 16 цифр";
    }
}
function changeNText(newText) {
    var NElement = document.getElementById('NELEMENT');
    NElement.textContent = newText;
}
function generateRandomNumber1() {
    var randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    document.getElementById('randomDigits').textContent = randomDigits;
}
document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('openModalBtn');
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.getElementById('closeModalBtn');
  
    openModalBtn.onclick = function() {
      modal.style.display = 'block';
    }
  
    closeModalBtn.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });

 function checkInput() {
      var userInput = document.getElementById("inputText").value;

      if (userInput) {
          alert("Помилка: Нічого не введено!");
      } else {
          alert("Ви ввели: " + userInput);
      }
  }

  function updateDateDisplay() {
    var dateInput = document.getElementById('date-input');
    var dateDisplay = document.getElementById('date-display');

    var selectedDate = dateInput.value;

    dateDisplay.innerText = selectedDate;
}