import React from 'react'
import { Card, Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const { Meta } = Card

const activities = [
  {
    title: 'Actividad 1 (Palabras)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex culpa nesciunt facere similique, quis porro praesentium pariatur nemo animi est totam nobis doloribus eaque reprehenderit repellat, minima deserunt nostrum.',
    to: '/game/1'
  },
  {
    title: 'Actividad 1 (Frases)',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem itaque facilis adipisci quibusdam illo? Numquam quos, iure maxime porro veritatis pariatur aliquam beatae ducimus, ipsa nesciunt vitae quia suscipit.',
    to: '/game/2'

  },
  {
    title: 'Actividad 2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id a amet, fuga eligendi quod voluptatibus, magni obcaecati eius modi deserunt voluptatum eaque delectus quia quis, commodi doloribus rem et. Saepe.',
    to: '/game/3'
  },
  {
    title: 'Actividad 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quis autem, consequuntur temporibus quasi quam iure sunt a incidunt et nobis expedita aperiam dolorum est itaque. Eos perspiciatis inventore cupiditate.',
    to: '/game/4'
  }
]

const Home = () => {
  return (
    <>
      <h1>Bienvenido a avance</h1>
      <div className='row'>
        {activities.map(item => (
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <Card
              key={item.title}
              title={item.title}
              hoverable
              actions={[
                <div className='mx-4'>
                  <Link to={item.to}>
                    <Button type='primary' block icon={<RightOutlined />}>
                      Realizar
                    </Button>
                  </Link>
                </div>
              ]}
            >
              {item.description}
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
