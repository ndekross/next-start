import { makeVar, ReactiveVar } from "@apollo/client"

export enum ThemeModes {
  light = "light",
  dark = "dark",
}

export interface Theme {
  mode: ThemeModes
  light: ColorTheme
  dark: ColorTheme
}

interface ColorTheme {
  bgPrimary: Color
  bgSecondary: Color
  bgTertiary: Color
  fgPrimary: Color
  fgSecondary: Color
  fgTertiary: Color
}

type Color = string

const theme: Theme = {
  mode: ThemeModes.light,
  light: {
    bgPrimary: "#F4F4F4",
    bgSecondary: "#e9e9e9",
    bgTertiary: "#3B3B3B",
    fgPrimary: "#1F1F1F",
    fgSecondary: "#757575",
    fgTertiary: "#363636",
  },
  dark: {
    bgPrimary: "#1F1F1F",
    bgSecondary: "#252525",
    bgTertiary: "#363636",
    fgPrimary: "#F4F4F4",
    fgSecondary: "#898989",
    fgTertiary: "#3B3B3B",
  },
}

export const currentTheme: ReactiveVar<Theme> = makeVar(theme)
