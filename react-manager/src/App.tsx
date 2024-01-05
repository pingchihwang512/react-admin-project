import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const total1 = () => {
    // eslint-disable-next-line no-console
    console.log('total1...')
    const list = [1, 3, 5, 7, 9]
    return list.reduce((prev, current) => prev + current, 0)
  }
  const total2 = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log('total2...')
    const list = [1, 3, 5, 7, 9]
    return list.reduce((prev, current) => prev + current, 0)
  }, [])
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleChildClick = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('子节点点击')
  }, [])
  return (
    <div className='App'>
      <p>欢迎学习React后台课程</p>
      <p>
        <span>Count值：{count}</span>
        <button onClick={handleClick}>按钮</button>
      </p>
      <p>{total1()}</p>
      <p>{total2}</p>
      <Child onClick={handleChildClick} />
    </div>
  )
}

// eslint-disable-next-line react/display-name
const Child = memo(({ onClick }: any) => {
  console.log('child...')
  return (
    <p>
      我是子节点<button onClick={onClick}>子节点按钮</button>
    </p>
  )
})

export default App
