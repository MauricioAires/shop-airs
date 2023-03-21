import { styled } from '../../styles'

import * as Dialog from '@radix-ui/react-dialog'

export const EmptyCart = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  margin: 'auto 0',
  textAlign: 'center',
})

export const RedirectCatalog = styled(Dialog.Close, {
  fontSize: '$lg',
  color: '$green500',
  fontWeight: 'bold',
  background: 'transparent',
  '&:hover': {
    color: '$green500',
  },
})

export const ContentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Close = styled(Dialog.Close, {
  background: 'transparent',
  color: '$gray300',
  lineHeight: 0,
})

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  color: '$gray100',
})

export const Content = styled(Dialog.Content, {
  borderRadius: 6,
  padding: '2.5rem 2rem',
  background: '$gray800',
  position: 'fixed',
  minHeight: '-webkit-fill-available',
  maxHeight: '-webkit-fill-available',
  top: 0,
  right: 0,
  bottom: 0,
  width: '500px',
  boxShadow: ' -4px 0px 30px rgba(0, 0, 0, 0.8)',
  overflow: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@md': {
    width: '100vw',
    padding: '1rem 1rem',
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',

    button: {
      backgroundColor: '$green500',
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      fontWeight: 'bold',
      fontSize: '$md',
      marginTop: '2rem',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
        transition: 'background ease-in-out 0.2s',
      },
    },

    span: {
      fontSize: '1rem',
      color: '$gray100',
    },

    strong: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',
    },

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0.5rem 0',
    },
  },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'transparent',
})

export const ShoppingCartWrapper = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  width: 48,
  height: 48,
  flexShrink: 0,

  borderRadius: 8,

  background: '$gray800',
  color: '$gray500',

  '&:hover': {
    transition: 'color 0.2s ease-in-out',
    color: '$gray300',
  },

  span: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: '$green500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$white',
    width: 24,
    height: 24,
    borderRadius: '100%',
    transform: 'translate(25%, -25%)',
    boxSizing: 'border-box',

    fontWeight: 'bold',

    border: 'solid 3px $gray900',
  },
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const ListProducts = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.5rem',

  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '1.5rem',

    width: '100%',

    img: {
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: 8,
      objectFit: 'cover',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem ',
      alignItems: 'flex-start',

      button: {
        background: 'transparent',
        color: '$green500',
        fontSize: '$md',
        fontWeight: 'bold',

        display: 'flex',
        justifyContext: 'center',
        alignItems: 'center',

        padding: '0.75rem 0 0.75rem 0',
        lineHeight: 0,
        borderRadius: 6,
        '&:hover': {
          color: '$green300',
        },
      },

      p: {
        fontSize: '$md',
        color: '$gray300',

        '@md': {
          fontSize: '1rem',
        },
      },

      strong: {
        fontSize: '$lg',
        color: '$gray100',

        '@md': {
          fontSize: '1rem',
        },
      },
    },
  },
})
