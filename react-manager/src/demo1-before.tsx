import React from 'react'
import './App.css'

function App()
{
	const name = 'Jack'
	return(
		<div>
			<p>歡迎學習React後台課程</p>
			<Child1 name = {name}/>
		</div>
	)
}

function Child1({name}:any){
	return(
		<div>
			<p>
				<span>Child1</span>
			</p>
			<p>
				<Child2 name={name}/>
			</p>
		</div>
	)
}

function Child2({name}:any){
	return <span>Child2{name}</span>
}

export default App
