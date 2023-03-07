import { useRouter } from 'next/router'

import * as S from '../../styles/pages/product'

export default function ProductPage() {
  const { query } = useRouter()
  return (
    <S.ProductContainer>
      <S.ImageContainer></S.ImageContainer>

      <S.ProductDetails>
        <h1>Camiseta Z</h1>
        <span>R$ 79.90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          doloribus ipsa aliquid aspernatur saepe neque laboriosam minus facere,
          ex reiciendis blanditiis maxime quos tenetur tempore accusamus modi
          quaerat quae ducimus.
        </p>
        <button>Comprar Agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  )
}
