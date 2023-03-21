import { AndroidLogo, Handbag, X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

type Product = {
  id: string
  name: string
  image: string
  formattedValue: string
  quantity: number
  price_id?: string
}

type ProductPayload = {
  price: string
  quantity: number
}

export function ShoppingCart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { removeItem, cartDetails, formattedTotalPrice } = useShoppingCart()

  let products: Product[] = []
  let quantityProducts = 0

  if (cartDetails !== undefined) {
    products = Object.values(cartDetails) as Product[]

    quantityProducts = products.reduce((sum, product) => {
      return sum + product.quantity
    }, 0)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const wishlist = products.reduce((items: ProductPayload[], product) => {
        items.push({
          price: product.price_id!,
          quantity: product.quantity,
        })

        return items
      }, [])

      const response = await axios.post('/api/checkout', {
        wishlist,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      /**
       * NOTE: Conectar com uma ferramenta de observabilidade (Datadog | Sentry)
       */
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
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
              <S.ContentHeader>
                <S.Title>Carrinho de compras</S.Title>
                <S.Close>
                  <X size={24} weight="bold" />
                </S.Close>
              </S.ContentHeader>

              {products.length === 0 ? (
                <S.EmptyCart>
                  <AndroidLogo size={50} />
                  <h1>Oops.. o carrinho está vazio</h1>
                  <Link href="/">
                    <S.RedirectCatalog>Voltar ao catálago</S.RedirectCatalog>
                  </Link>
                </S.EmptyCart>
              ) : (
                <S.ListProducts>
                  {products.map((product) => (
                    <li key={product.id}>
                      <Image
                        src={product.image}
                        width={100}
                        height={93}
                        alt=""
                      />
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
              )}
            </S.MainContent>

            {!!products.length && (
              <footer>
                <div>
                  <span>Quantidade</span>
                  <span>{quantityProducts} items</span>
                </div>
                <div>
                  <strong>Valor total</strong>
                  <strong>{formattedTotalPrice}</strong>
                </div>
                <p>
                  Dados bancários para gerar uma compra de teste, número do
                  cartão <strong>4242 4242 4242 4242</strong>, data de validade{' '}
                  <strong>
                    {' '}
                    {new Intl.DateTimeFormat('pt-BR', {
                      month: '2-digit',
                      year: '2-digit',
                    }).format(
                      new Date().setMonth(new Date().getMonth() + 2),
                    )}{' '}
                  </strong>
                  e CVV <strong>404</strong>
                </p>
                <button
                  type="submit"
                  onClick={() => handleBuyProduct()}
                  disabled={isCreatingCheckoutSession}
                >
                  Finalizar compra
                </button>
              </footer>
            )}
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
