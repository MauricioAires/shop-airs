import { styled } from '../../styles'

export const FooterWrapper = styled('div', {
  minHeight: '100px',
  height: 'auto',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  marginTop: '80px',

  padding: '1rem',
})

export const FooterContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1180px',
  width: '100%',
  flexWrap: 'wrap',

  '@lg': {
    flexDirection: 'column',
    gap: '2rem',
  },

  a: {
    lineHeight: 0,
  },

  img: {
    width: '5rem',
  },

  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    fontSize: '$sm',

    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

    li: {
      cursor: 'pointer',

      a: {
        textDecoration: 'none',
        color: '$gray100',
        lineHeight: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
          color: '$green300',
        },
      },

      '&:hover': {
        textDecoration: 'underline',
        color: '$green300',
      },
    },
  },
})
