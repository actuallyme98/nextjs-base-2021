import { createTheme, Theme } from '@material-ui/core/styles';
import {
  BLACK_COLOR,
  WHITE_COLOR,
  MID_NIGHT_COLOR,
  DODGER_BLUE_COLOR,
  FRUIT_SALAD_COLOR,
  ORANGE_PEEL_COLOR,
  RED_ORANGE_COLOR,
} from '~/constants/colors';
import {
  XS_BREAKPOINT,
  SM_BREAKPOINT,
  MD_BREAKPOINT,
  LG_BREAKPOINT,
  XL_BREAKPOINT,
} from '../constants/breakpoints';

const theme: Theme = createTheme({
  colors: {
    black: BLACK_COLOR,
    white: WHITE_COLOR,
    midnight: MID_NIGHT_COLOR,
    dodgerBlue: DODGER_BLUE_COLOR,
    fruitSalad: FRUIT_SALAD_COLOR,
    orangePeel: ORANGE_PEEL_COLOR,
    redOrange: RED_ORANGE_COLOR,
  },
  breakpoints: {
    values: {
      xs: XS_BREAKPOINT,
      sm: SM_BREAKPOINT,
      md: MD_BREAKPOINT,
      lg: LG_BREAKPOINT,
      xl: XL_BREAKPOINT,
    },
  },
  spacing: 8,
  palette: {
    primary: {
      main: DODGER_BLUE_COLOR,
    },
  },
});

export default theme;
