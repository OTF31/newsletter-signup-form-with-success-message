import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  breakpoints: { xs: '23.4375em', xl: '90em' },
  fontFamily: 'Roboto, Ubuntu, IBM Plex Sans, sans-serif',
  colors: {
    sambucus: [
      'E8E8EA',
      '#D1D1D5',
      '#BABABF',
      '#A3A3AA',
      '#757480',
      '#474655',
      '#19182B',
      '#141322',
      '#0F0E1A',
      '#0A0A11',
    ],
    paleNavy: [
      '#EBEBED',
      '#D7D7DB',
      '#C3C3CA',
      '#AFAFB8',
      '#868894',
      '#5E6071',
      '#36384D',
      '#2B2D3E',
      '#20222E',
      '#16161F',
    ],
    darkNavy: [
      '#E9E9EC',
      '#D3D4D9',
      '#BDBEC6',
      '#A7A9B3',
      '#7C7D8E',
      '#505268',
      '#242742',
      '#1D1F35',
      '#161728',
      '#0E101A',
    ],
    vermellion: [
      '#FFEFEE',
      '#FFDFDD',
      '#FFD0CC',
      '#FFC0BB',
      '#FFA099',
      '#FF8177',
      '#FF6155',
      '#CC4E44',
      '#993A33',
      '#662722',
    ],
  },
};

export { theme };
