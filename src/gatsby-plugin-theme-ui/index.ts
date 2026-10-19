import { merge } from 'theme-ui';
import originalTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index';

const highlighterUnderline = (color: string, coverage: string) =>
  `linear-gradient(transparent ${coverage}, ${color} ${coverage})`;

const subtleImageFrame = {
  borderRadius: `4px`,
  boxShadow: `0 0 0 1px var(--theme-ui-colors-divide)`,
  maxWidth: `100%`,
};

const theme = merge(originalTheme, {
  colors: {
    text: `#2b2633`,
    heading: `#16121d`,
    background: `#fbfafc`,
    primary: `#5a1fa8`,
    secondary: `#6a6377`,
    highlight: `#e6d6fb`,
    toggleIcon: `#4a4356`,
    divide: `#e2dde9`,
    muted: `#f0edf4`,
    modes: {
      dark: {
        text: `#d8d3e0`,
        heading: `#f5f2f9`,
        background: `#15121b`,
        primary: `#c9a8fa`,
        secondary: `#9d95ab`,
        highlight: `#3d2a5c`,
        toggleIcon: `#d8d3e0`,
        divide: `#2d2738`,
        muted: `#221d2b`,
      },
    },
  },
  styles: {
    img: subtleImageFrame,
  },
  layout: {
    content: {
      a: {
        color: `heading`,
        textDecoration: `none`,
        backgroundImage: highlighterUnderline(`var(--theme-ui-colors-highlight)`, `62%`),
        transition: `background-size 0.2s ease-out, color 0.2s ease-out`,
        ':hover': {
          color: `primary`,
        },
      },
      figure: {
        img: subtleImageFrame,
      },
    },
  },
});

export default theme;
