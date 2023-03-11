import { Handbag } from 'phosphor-react'

import * as S from './styles'

interface ProductDetailsProps {
  name: string
  price: string
}

export function ProductDetails({ price, name }: ProductDetailsProps) {
  return (
    <S.ProductDetailsWrapper>
      <div>
        <strong>{name}</strong>
        <span>{price}</span>
      </div>
      <button>
        <Handbag weight="bold" size={32} />
      </button>
    </S.ProductDetailsWrapper>
  )
}
