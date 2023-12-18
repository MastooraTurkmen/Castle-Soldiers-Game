import { nanoid } from "nanoid"

export default [
	{
		id: nanoid(),
		currentImage: "https://i.postimg.cc/gJk2m08R/enemy1A.png",
		altImage: "https://i.postimg.cc/JzfXrjzX/enemy1B.png",
		orientation: "left",
		position: {
			top: 210,
			left: 157,
		}
	},{
		id: nanoid(),
		currentImage: "https://i.postimg.cc/8cpM8DPn/enemy2A.png",
		altImage: "https://i.postimg.cc/SKYGVyJ6/enemy2B.png",
		orientation: "right",
		position: {
			top: 105,
			left: 187,
		}
	},{
		id: nanoid(),
		currentImage: "https://i.postimg.cc/d3j6d4Dg/enemy3A.png",
		altImage: "https://i.postimg.cc/ZR12j7bR/enemy3B.png",
		orientation: "right",
		position: {
			top: 165,
			left: 165,
		}
	},
]
