import Image from 'next/image'
import Link from 'next/link'

import { GithubLogo, LinkedinLogo } from 'phosphor-react'

import logoImg from '@/assets/logo.svg'

import * as S from './styles'

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <ul>
          <li>Cookies </li>
          <li> Política de Privacidade </li>
          <li> Termos e Condições de Uso </li>
          <li> Regulamento das Promoções </li>
          <li> FAQs</li>
        </ul>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/MauricioAires"
              rel="noreferrer"
            >
              <GithubLogo size={22} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/mauricioairs"
              rel="noreferrer"
            >
              <LinkedinLogo size={26} />
            </a>
          </li>
        </ul>
      </S.FooterContent>
    </S.FooterWrapper>
  )
}
