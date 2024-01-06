import React, {useContext, useReducer} from 'react'
import './App.css'

const UserContext = React.createContext({})

function App(){
	const reducer = (state:string, action: {type:string, name: string})=>{
		switch(action.type){
			case'update_name':
				return action.name
			default:
				return state
		}
	}
	const[name, dispatch] = useReducer(reducer, 'Tom')
	return(
		<UserContext.Provider value={{ name, dispatch}}>
			<div>
				<p>歡迎學習React後台課程</p>
				<Child1/>
				<Child2/>
			</div>
		</UserContext.Provider>
	)
}

function Child1(){
	const { dispatch }: any = useContext(UserContext)
	const handleClick = () => {
		dispatch({
			type:'update_name',
			name: Math.random()+''
		})
	}
	return(
		<p>
			<span>Child1</span>
			<button onClick={handleClick}>按鈕</button>
		</p>
	)
}

function Child2(){
	const{ name }: any = useContext(UserContext)
	return(
		<p>
			<span>Child2 {name}</span>
		</p>
	)
}

export default App
