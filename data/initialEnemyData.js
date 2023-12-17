import { nanoid } from "nanoid"

export default [
	{
		id: nanoid(),
		currentImage: "./images/enemy1A.png",
		altImage: "./images/enemy1B.png",
		orientation: "left",
		position: {
			top: 210,
			left: 157,
		}
	},{
		id: nanoid(),
		currentImage: "./images/enemy2A.png",
		altImage: "./images/enemy2B.png",
		orientation: "right",
		position: {
			top: 105,
			left: 187,
		}
	},{
		id: nanoid(),
		currentImage: "./images/enemy3A.png",
		altImage: "./images/enemy3B.png",
		orientation: "right",
		position: {
			top: 165,
			left: 165,
		}
	},
]
