import { styled } from '..'

export const ProductContainer = styled('main', {
  gap: '4rem',

  display: 'flex',
  justifyContent: 'space-between',

  maxWidth: 1180,
  margin: '0 auto',
  marginBottom: 100,

  position: 'relative',

  '>a': {
    color: '$gray300',
    position: 'absolute',
    left: 0,
  },

  '@lg': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export const ButtonBack = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  transform: 'translateY(-130%)',
  left: 0,

  width: 48,
  height: 48,
  flexShrink: 0,

  borderRadius: '100%',

  background: '$gray800',
  color: '$gray300',

  border: '2px solid transparent',

  transition: 'border-color 0.3s ease-in-out, color 0.3s ease-in-out',

  '&:hover': {
    transition: 'border 0.3s ease-in-out, color 0.3s ease-in-out',
    color: '$green300',
    border: '2px solid $green300',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.25rem)',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@lg': {
    maxWidth: '100%',
    height: 'calc(456px - 0.25rem)',
  },

  '@md': {
    height: 'calc(356px - 0.25rem)',
  },

  img: {
    objectFit: 'cover',

    '@md': {
      width: 330,
      height: 280,
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
    fontWeight: 'bold',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: '3rem',
    backgroundColor: '$green500',
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: 'background ease-in-out 0.2s',
    },
  },
})
