import React, {useState} from 'react'
import './App.css'

function App() {
  const valueByPassed = React.useMemo(() => (document.querySelector('meta[name="msg"]') as HTMLMetaElement)?.content, [])
  const jsonByPassed = React.useMemo(() => JSON.parse(
    (document.querySelector('meta[name="json"]') as HTMLMetaElement)?.content
  ), [])

  return (
    <div className="App">
      <p>Reactで作った画面</p>
      <p>外から渡された値: {valueByPassed}</p>
      <p>ユーザー名: {jsonByPassed.userName}</p>
      <p>メールアドレス: {jsonByPassed.email}</p>
    </div>
  )
}

export default App
