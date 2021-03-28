import { createTheme } from 'baseui';

const theme = {
  primitives: {
    primaryFontFamily:
      'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  overrides: {},
};

export default createTheme(theme.primitives, theme.overrides);
