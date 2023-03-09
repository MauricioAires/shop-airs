import { NextApiRequest, NextApiResponse } from 'next'

/**
 * NOTE: Todos os processos aqui realizados
 * são server-side dessa forma não precisa se preocupar com dados
 * sensíveis os secrets
 *
 */

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  return res.json({
    message: 'Hello World',
  })
}
