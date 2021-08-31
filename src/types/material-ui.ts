import {
  ClassKeyOfStyles,
  StyledComponentProps as MUIStyledComponentProps,
} from '@material-ui/styles/withStyles';

type ColorProperty = string;

interface ThemeColors {
  black: ColorProperty;
  white: ColorProperty;
  midnight: ColorProperty;
  dodgerBlue: ColorProperty;
  fruitSalad: ColorProperty;
  orangePeel: ColorProperty;
  redOrange: ColorProperty;
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    colors: ThemeColors;
  }
  interface ThemeOptions {
    colors: ThemeColors;
  }
}

export type StyledComponentProps<StylesOrClassKey> = MUIStyledComponentProps<
  ClassKeyOfStyles<StylesOrClassKey>
>;
