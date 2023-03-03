import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },
  button: {
    border: 0,
    cursor: 'pointer',
  },
  'body, input, textarea,  button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
