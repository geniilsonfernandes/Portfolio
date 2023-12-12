const PROJECT_CONFIG = {
  transitions: {
    ease_in_out: 'all 0.1s ease-in-out',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    slow_start: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    slow_end: 'all 0.5s cubic-bezier(0.43, 0, 0.72, 1)',
  },
  viewPorts: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1064px',
    large: '1440px',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  radius: {
    md: '8px',
    sm: '4px',
  },
  font: {
    family: "'Rubik', sans-serif",
    normal: 500,
    bold: 600,
    small: 300,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '3.8rem',
      xhuge: '4.5rem',
      xxhuge: '5.2rem',
    },
  },
  boxShadow:
    ' 0px 0px 0px 1px rgba(24, 24, 27, 0.05), 0px 10px 15px -3px rgba(39, 39, 42, 0.05), 0px 4px 6px -4px rgba(39, 39, 42, 0.05);',
} as const

const DARK_THEME = {
  text: {
    100: '#FCFCFD',
    200: '#F2F2F2',
    300: '#D8D8D8',
    400: '#BEBEBE',
    500: '#A2A2A2',
    600: '#8C8C8C',
    700: '#6E6E6E',
    800: '#4F4F4F',
    900: '#333333',
  },
  background: {
    900: '#181818',
    800: '#1E1E1E',
    700: '#2C2C2C',
    600: '#3A3A3A',
    500: '#484848',
    400: '#6E6E6E',
    300: '#8C8C8C',
    200: '#B4B4B4',
    100: '#D2D2D2',
  },
  primary: {
    100: '#3ED4C5',
    200: '#52DFD5',
    300: '#6CE8E4',
    400: '#88F1F1',
    500: '#A4FAFA',
    gradient: {
      100: 'linear-gradient(138.83deg, #3ED4C5 4.52%, #0B877D 104.14%)',
      200: 'linear-gradient(138.83deg, #52DFD5 4.52%, #0E5B52 104.14%)',
      300: 'linear-gradient(138.83deg, #6CE8E4 4.52%, #0F3D35 104.14%)',
      400: 'linear-gradient(138.83deg, #88F1F1 4.52%, #138F7B 104.14%)',
      500: 'linear-gradient(138.83deg, #A4FAFA 4.52%, #17A68C 104.14%)',
    },
  },
  error: {
    100: '#DD2626',
    200: '#662020',
  },
  success: {
    100: '#43AB65',
    200: '#22442C',
  },
  warning: {
    100: '#F0B23A',
    200: '#4B3C1D',
  },
} as const

export const DARK = {
  colors: DARK_THEME,
  ...PROJECT_CONFIG,
} as const

export default {
  colors: DARK_THEME,
  ...PROJECT_CONFIG,
} as const
