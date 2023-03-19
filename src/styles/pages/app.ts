import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'flex-start',
  padding: '1rem',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',
  marginBottom: '3rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@md': {
    img: {
      height: 40,
    },
  },
})
