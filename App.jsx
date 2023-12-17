import React from "react"
import Enemy from "./components/Enemy"
import Button from "./components/Button"
import runGame from "./utilities/runGame"
import initialEnemyData from "./data/initialEnemyData"

export default function App() {
	
	const [gameRunning, setGameRunning] = React.useState(false)
	const [enemiesData, setEnemiesData] = React.useState(initialEnemyData)
   
    runGame(gameRunning, setEnemiesData)
	const enemies = enemiesData.map(enemy => <Enemy key={enemy.id} {...enemy} /> )
	
	return (
		<div className="wrapper">
			<div className="meadow-container">
				<div className="castle-container">
					{enemies}
				</div>
			</div>
			<Button stateProps={{ gameRunning, setGameRunning }} />
		</div>
	)
}
