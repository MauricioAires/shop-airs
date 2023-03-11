import { styled } from '@stitches/react'

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
