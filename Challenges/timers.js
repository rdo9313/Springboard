function countDown(num) {
	const timeID = setInterval(() => {
		num -= 1;
		if (num === 0) {
			console.log("DONE!");
			clearInterval(timeID);
		} else {
			console.log(num);
		}
	},1000)
}

countDown(4);

function randomGame() {
	let counter = 0;
	const timeID = setInterval(() => {
		let randomNum = Math.random();
		if (randomNum <= 0.75) {
			counter++;
		} else {
			clearInterval(timeID);
			console.log(counter);
		}
	}, 1000)
}