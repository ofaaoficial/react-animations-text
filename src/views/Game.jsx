import React from 'react'
import GameOne from '../components/GameOne'
import GameTwo from '../components/GameTwo'
import GameThree from '../components/GameThree'
import { useParams, Link } from 'react-router-dom'
import { Button } from 'antd'

import { RightOutlined } from '@ant-design/icons'

const styles = {
  fontFamily: 'Arial", serif',
  fontWeight: 'bold',
  fontSize: 25,
  color: '#7cba31'
}

const games = {
  1: {
    component: <GameOne />,
    params: {
      time: 60,
      speed: 150,
      content: [
        'pie',
        'talón',
        'espinilla',
        'rodilla',
        'bigote',
        'cabello',
        'oreja',
        'cerebro'
      ]
    }
  },
  2: {
    component: <GameOne />,
    params: {
      time: 60,
      speed: 150,
      type: 2,
      content: [
        'mi primo dichoso combatiendo irregularidades',
        'y su mano sedosa acariciaba delicadamente',
        'si ese plazo quizás caducará próximamente',
        'en lectura avanzada desarrollan habilidades intelecturales'
      ]
    }
  },
  3: {
    component: <GameTwo />,
    params: {
      time: 60,
      speed: 150,
      content: [
        'mi primo dichoso combatiendo irregularidades',
        'y su mano sedosa acariciaba delicadamente',
        'si ese plazo quizás caducará próximamente',
        'en lectura avanzada desarrollan habilidades intelecturales'
      ]
    }
  },
  4: {
    component: <GameThree />,
    params: {
      time: 60,
      speed: 1
    }
  }
}

const Game = () => {
  const useGameWithParams = () => {
    const { _id } = useParams()
    const game = games[_id]
    const newGame = React.cloneElement(game.component || <></>, {
      ...game.params,
      styles
    })
    return newGame
  }

  return (
    <>
      <h1>Juego</h1>
      <div style={{ minWidth: '100%' }}>{useGameWithParams()}</div>
      <div className='mt-5'>
        <Link to='/'>
          <Button type='primary' block icon={<RightOutlined />}>
            Terminar
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Game
