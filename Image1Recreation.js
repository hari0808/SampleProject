function update() {
var initialAmount = 100;
var expectedFund = 1000;
var element = document.getElementById("myprogressBar");
var amountDonated = document.getElementById("amount").value;
var displayAmount = parseInt(initialAmount) + parseInt(amountDonated);
console.log(displayAmount);
var pendingAmount = expectedFund - displayAmount;
var width = (displayAmount/expectedFund)*100;
console.log(width);
var identity = setInterval(scene, 10);
function scene() {
if (width >= 100) {
clearInterval(identity);
} else {
//width++;
element.style.width = width + '%';
}
}
}