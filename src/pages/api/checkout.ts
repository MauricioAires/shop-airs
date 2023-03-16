import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * NOTE: Todos os processos aqui realizados
 * são server-side dessa forma não precisa se preocupar com dados
 * sensíveis os secrets
 *
 */

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { wishlist } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed ',
    })
  }

  if (!wishlist.length) {
    return res.status(400).json({
      error: 'wishlist not found',
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: wishlist,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
