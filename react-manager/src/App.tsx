import './App.css'

function App({ type }: { type: string }) {
  const p = <p>欢迎学习React通用后台开发</p>
  const isAdmin = false
  const style = { color: 'red', fontSize: 22 }
  const name = <span style={style}>河畔一角</span>
  const list = ['tom', 'Jack', 'Lucy', 'Lily']
  const handleChange = (e: any) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value)
  }
  return (
    <div className='App'>
      {p}
      <p>{isAdmin ? '您好：管理员' : <span>普通访客</span>}</p>
      {name}
      <p>用户列表：</p>
      <p>
        {list.map(item => {
          return <span key={item}>{item}</span>
        })}
      </p>
      <p>
        <input type='text' onChange={handleChange} />
      </p>
      <p>{type}</p>
    </div>
  )
}

export default App
