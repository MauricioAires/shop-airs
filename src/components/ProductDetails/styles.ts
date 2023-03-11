import { styled } from '@stitches/react'

export const ProductDetailsWrapper = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0,0,0,0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  button: {
    background: '$green500',
    color: '$white',
    borderRadius: 8,
    width: 56,
    height: 56,
    flexShrink: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      background: '$green300',
    },
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
      whiteSpace: 'nowrap',

      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: '20vw',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },
})
