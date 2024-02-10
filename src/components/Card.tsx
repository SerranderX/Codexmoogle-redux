import { memo } from 'react'
import { Card as AntdCard, Button } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setFavoriteAction } from '../actions'

type FavoriteButtonProps = { favorite: boolean | undefined; handlerClick: () => void }

const FavoriteButton = ({ favorite, handlerClick }: FavoriteButtonProps) => {
  const Icon = !favorite ? StarOutlined : StarFilled
  return <Button icon={<Icon />} onClick={() => handlerClick()} />
}

type CardProps = {
  imageUrl: string
  name: string
  description: string
  favorite: boolean | undefined
  itemId: string
}

const Card = memo(({ imageUrl, name, description, favorite, itemId }: CardProps) => {
  const dispatch = useDispatch()
  const n = 150

  const handleStarClick = () => {
    dispatch<any>(setFavoriteAction(itemId))
  }

  return (
    <AntdCard
      title={name}
      cover={
        <img style={{ maxWidth: '100px', maxHeight: 'auto', margin: '10% 25%' }} src={imageUrl} alt={`${name}-image`} />
      }
      extra={<FavoriteButton favorite={favorite} handlerClick={handleStarClick} />}
      bordered={true}
    >
      <p title={description}>{description?.length > n ? description?.substring(0, n - 1) + '...' : description}</p>
    </AntdCard>
  )
})

Card.displayName = 'Card'

export { Card }
