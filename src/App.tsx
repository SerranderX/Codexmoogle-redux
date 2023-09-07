import React, { useState, useEffect } from 'react'
import { Searcher } from './components/Searcher'
import { CardList } from './components/CardList'

import { api } from './api/base'
import { Col } from 'antd'
import './App.css'

function App() {
  const [characters, setCharacters] = useState<Array<any>>([])

  useEffect(() => {
    console.log('apí is ' + process.env.REACT_APP_MOOGLEAPI)

    const getCharacters = async () => {
      await api
        .get('characters')
        .then((response) => setCharacters(response.data))
        .catch((error) => {
          throw error
        })
    }

    getCharacters()
  }, [])

  return (
    <div className='App'>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <CardList characters={characters} />
    </div>
  )
}

export default App
