import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',

    fontSize: '$lg',
    color: '$green500',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green500',
    },
  },
})

export const ProductsWrapper = styled('div', {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '100%',
  padding: '0.25rem',

  marginTop: '4rem',
  marginBottom: '2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all ease-in-out 0.2s',

  '&:not(:first-child)': {
    marginLeft: '-8%',
  },

  '&:hover': {
    boxShadow: ' -4px 0px 30px rgba(0, 0, 0, 0.8)',
    transform: 'translateY(-10%)',
  },

  img: {
    objectFit: 'cover',
  },
})
