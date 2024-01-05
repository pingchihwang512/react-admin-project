import { useEffect, useState } from 'react'
import './App.css'
import { useWindowSize } from './useWindowSize'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    document.title = 'React后台课程'
  })

  useEffect(() => {
    setCount(count + 1)
  }, [])

  useEffect(() => {
    setTotal(count * 5)
  }, [count])

  useEffect(() => {
    const T = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(T)
    }
  }, [])

  const size = useWindowSize()

  return (
    <div className='App'>
      <p>欢迎学习React后台课程</p>
      <p>
        Count:{count}, Total:{total}
      </p>
      <p>
        window width:{size.width}, window height: {size.height}
      </p>
    </div>
  )
}

export default App
