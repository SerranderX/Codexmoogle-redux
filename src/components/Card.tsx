import React, { memo } from 'react'
import { Card as AntdCard } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

interface CardProps {
  title: string
  imageUrl: string
  description: string
}

const Card = memo(({ title, imageUrl, description }: CardProps) => {
  return (
    <AntdCard title={title} cover={<img src={imageUrl} alt={`${title}-image`} />} extra={<StarOutlined />}>
      <Meta description={description} />
    </AntdCard>
  )
})

Card.displayName = 'Card'

export { Card }
