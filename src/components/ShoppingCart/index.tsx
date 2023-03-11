import { Handbag } from 'phosphor-react'

import * as S from './styles'

export function ShoppingCart() {
  return (
    <S.ShoppingCartWrapper>
      <Handbag weight="bold" size={24} />

      <span>1</span>
    </S.ShoppingCartWrapper>
  )
}
