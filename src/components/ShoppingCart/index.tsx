import { Handbag, X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'
import Image from 'next/image'

type Product = {
  id: string
  name: string
  image: string
  formattedValue: string
  quantity: number
}

export function ShoppingCart() {
  const { removeItem, cartDetails, clearCart, formattedTotalPrice } =
    useShoppingCart()

  console.log(cartDetails)

  let products: Product[] = []
  let quantityProducts = 0

  if (cartDetails !== undefined) {
    products = Object.values(cartDetails) as Product[]

    quantityProducts = products.reduce((sum, product) => {
      return sum + product.quantity
    }, 0)
  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <S.ShoppingCartWrapper>
            <Handbag weight="bold" size={24} />

            {!!quantityProducts && <span>{quantityProducts}</span>}
          </S.ShoppingCartWrapper>
        </Dialog.Trigger>

        <Dialog.Portal>
          <S.Overlay />
          <S.Content>
            <S.MainContent>
              <S.Title>Sacola de compras</S.Title>
              <S.Close>
                <X size={24} weight="bold" />
              </S.Close>

              <S.ListProducts>
                {products.map((product) => (
                  <li key={product.id}>
                    <Image src={product.image} width={100} height={93} alt="" />
                    <div>
                      <p>{product.name} </p>
                      <strong>{product.formattedValue}</strong>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </S.ListProducts>
            </S.MainContent>

            <footer>
              <div>
                <span>Quantidade</span>
                <span>{quantityProducts} items</span>
              </div>
              <div>
                <strong>Valor total</strong>
                <strong>{formattedTotalPrice}</strong>
              </div>
              <button>Finalizar compra</button>
            </footer>
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
