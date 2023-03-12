import { Handbag } from 'phosphor-react'

import * as S from './styles'

interface ProductDetailsProps {
  name: string
  price: string
  handleAddShoppingCart: () => void
}

export function ProductDetails({
  price,
  name,
  handleAddShoppingCart,
}: ProductDetailsProps) {
  return (
    <S.ProductDetailsWrapper>
      <div>
        <strong>{name}</strong>
        <span>{price}</span>
      </div>
      <button type="button" onClick={() => handleAddShoppingCart()}>
        <Handbag weight="bold" size={32} />
      </button>
    </S.ProductDetailsWrapper>
  )
}
