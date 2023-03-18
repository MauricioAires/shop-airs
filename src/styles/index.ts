import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  media: {
    sm: '(max-width: 30em) ', // 480px
    md: '(max-width: 48em) ', // 768px
    lg: '(max-width: 62em) ', // 992px
    xl: '(max-width: 80em) ', // 1280px
    '2xl': '(max-width: 96em) ', // 1536px
  },
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
