function generateCard() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let value = values[Math.floor(Math.random() * values.length)];
  
  document.getElementById("top").textContent = value;
  document.getElementById("suit").textContent = suit;
  document.getElementById("bottom").textContent = value;
  
  if (suit === '♥' || suit === '♦') {
      document.getElementById("card").style.color = "red";
  } else {
      document.getElementById("card").style.color = "black";
  }
}

window.onload = generateCard;
