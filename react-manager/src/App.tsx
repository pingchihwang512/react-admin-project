/* eslint-disable no-console */
import { useState } from 'react'
import { flushSync } from 'react-dom'
import './App.css'

function App() {
  const [name, setName] = useState('河畔一角')
  const [user, setUser] = useState({ name: '河畔一角', age: 30 })
  const [list, setList] = useState(['Tom', 'Jack'])
  const [count, setCount] = useState(0)
  const handleUpdate = () => {
    setName('React')
  }
  const handleUser = () => {
    setUser({ name: 'React', age: 50 })
    setUser({ ...user, age: 50 })
  }
  const handleList = () => {
    setList([...list, 'Lily'])
  }

  const handleCount = () => {
    // setTimeout(() => {
    //   setCount(count => count + 1)
    //   setCount(count => count + 1)
    //   setCount(count => count + 1)
    //   setCount(count => count + 1)
    // })
    flushSync(() => {
      setCount(count => count + 1)
      setCount(count => count + 1)
    })
    flushSync(() => {
      setCount(count => count + 1)
      setCount(count => count + 1)
    })
    // setCount(count + 1)
    // setCount(count + 1)
  }
  console.log('render')
  return (
    <div className='App'>
      <p>欢迎学习React通用后台课程</p>
      <p>{name}</p>
      <p>
        <span>用户名称：{user.name}</span>
        <span style={{ marginLeft: 10 }}>用户年龄：{user.age}</span>
      </p>
      <p>
        {list.map(item => {
          return (
            <span key={item} style={{ marginRight: 10 }}>
              {item}
            </span>
          )
        })}
      </p>
      <p>
        <span>Count：{count}</span>
      </p>
      <p>
        <button onClick={handleUpdate}>修改名称</button>
        <button onClick={handleUser}>修改用户</button>
        <button onClick={handleList}>修改数组</button>
        <button onClick={handleCount}>修改Count</button>
      </p>
    </div>
  )
}

export default App
