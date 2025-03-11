function generateCard() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const symbols = { "hearts": "♥", "diamonds": "♦", "clubs": "♣", "spades": "♠" };
    const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    
    let card = document.getElementById("card");
    
    // Remueve clases previas
    card.className = "card mx-auto p-4 shadow " + randomSuit;
    
    document.getElementById("topSuit").innerText = symbols[randomSuit];
    document.getElementById("number").innerText = randomNumber;
    document.getElementById("bottomSuit").innerText = symbols[randomSuit];
  }
  
  // Generar una carta al cargar la página
  document.addEventListener("DOMContentLoaded", generateCard);
  