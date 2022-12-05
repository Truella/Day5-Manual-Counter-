var count = 0;
const displayCount = document.getElementById("Number");
displayCount.innerHTML = count;
const button = document.getElementById("addBtn");
button.addEventListener("click", function () {
				count = count + 1;
				displayCount.innerHTML = count;
				if(displayCount.innerHTML > 0) {
				displayCount.style.color = "green";
}
else if(displayCount.innerHTML == 0) {
				displayCount.style.color = "#000";
}
else{
				displayCount.style.color = "red"; 
}
})
const btn = document.getElementById("decreaseBtn");
btn.addEventListener("click", function () {
				count = count - 1;
				displayCount.innerHTML = count ;
				if(displayCount.innerHTML > 0) {
				displayCount.style.color = "green";
}
else if(displayCount.innerHTML == 0) {
				displayCount.style.color = "#000";
}
else{
				displayCount.style.color = "red"; 
}
})
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", function () {
				count = 0;
				displayCount.innerHTML = count;
				displayCount.style.color = "#000"
});