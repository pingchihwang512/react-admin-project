import React, {useContext} from 'react'
import './App,css'
const UserContext = React.createContext({name:''})
function App(){
	return(
		<UserContext.Provider value = {{name: 'Jack'}}>
			<div>
				<p>歡迎學習React後台課程</p>
				<Child1/>
			</div>
		</UserContext.Provider>
	)
}

function Child1(){
	return(
		<div>
			<p>
				<span>Child1</span>
			</p>
			<p>
				<Child2 />
			</p>
		</div>
	)
}

function Child2(){
	const{ name } = useContext(UserContext)
	return <span>Child2</span>
}

export default App
