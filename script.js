//your code here


const images = document.querySelectorAll("img");
let clickedImages = [];

images.forEach((image, i) => {
	image.addEventListener("click", (e) => {
		e.target.classList.add("selected");
		document.getElementById("reset").style.display = "block";

		if(!(clickedImages.includes(image))){
			clickedImages.push(image);
		};

		if(clickedImages.length === 2){
			document.getElementById("verify").style.display = "block";
		};
	});
});

function verify(){
	const message = document.querySelector(".message");
	if(getComputedStyle(clickedImages[0]).getPropertyValue("content") === getComputedStyle(clickedImages[1]).getPropertyValue("content")){
		message.innerText = "You are a human. Congratulations!";
	} else{	
		message.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
	}
}

function reset(){
	location.reload();
}