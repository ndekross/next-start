export function withHover(props) {
  return {
    "@media (hover: hover)": {
      "&:hover": {
        ...props,
      },
    },
  }
}

export function generateFontBreakpoints(
  breakpoints = 5,
  widthStep = 20,
  fontStep = 10
) {
  let result = {}
  for (let breakpoint = 1; breakpoint <= breakpoints; breakpoint++) {
    Object.assign(result, {
      ...withMinWidth(breakpoint * widthStep, {
        fontSize: percent(100 + breakpoint * fontStep),
      }),
    })
  }
  return result
}

function convertNumericValues(unit) {
  return (...args) => {
    let result = ""
    for (let argument of args) {
      result += `${argument.toString()}${unit} `
    }
    return result.trim()
  }
}

export function clamp(min, val, max) {
  return `clamp(${min}, ${val}, ${max})`
}

export function compose() {
  return Array.from(arguments).join(" ").trim()
}

export const em = convertNumericValues("em")
export const rem = convertNumericValues("rem")
export const percent = convertNumericValues("%")
export const ch = convertNumericValues("ch")
export const ex = convertNumericValues("ex")
export const px = convertNumericValues("px")

export function center() {
  return {
    marginLeft: "auto",
    marginRight: "auto",
  }
}

export function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function vh(num) {
  return `${num.toString()}vh`
}
export function vw(num) {
  return `${num.toString()}vw`
}

export function fr(num) {
  let css = ""
  while (num > 0) {
    css += "1fr "
    num--
  }
  return css.trim()
}

export function exceptForLast(props) {
  return {
    "&:not(:last-of-type)": {
      ...props,
    },
  }
}
export function exceptForFirst(props) {
  return {
    "&:not(:first-of-type)": {
      ...props,
    },
  }
}
export function firstOfType(props) {
  return {
    "&:first-of-type": {
      ...props,
    },
  }
}

export function lastOfType(props) {
  return {
    "&:last-of-type": {
      ...props,
    },
  }
}

export function withMinWidth(width, props) {
  return {
    [`@media (min-width: ${width}em)`]: {
      ...props,
    },
  }
}

export function withMinWidthPx(width, props) {
  return {
    [`@media (min-width: ${width}px)`]: {
      ...props,
    },
  }
}

export function withMaxWidth(width, props) {
  return {
    [`@media (max-width: ${width}em)`]: {
      ...props,
    },
  }
}
export function withMaxWidthPx(width, props) {
  return {
    [`@media (max-width: ${width}px)`]: {
      ...props,
    },
  }
}

export function convertRemToPixels(rem) {
  if (!window) throw "Use only in useEffectHooks"
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export function leadingTrim(
  lineHeight,
  correction = {
    top: 0,
    bottom: 0,
  },
  reference = {
    topCrop: 8,
    bottomCrop: 10,
    lineHeight: 1.2,
    fontSize: 36,
  }
) {
  const dynamicCropTop =
    Math.max(
      reference.topCrop +
        (lineHeight - reference.lineHeight) * (reference.fontSize / 2),
      0
    ) / reference.fontSize

  const dynamicCropBottom =
    Math.max(
      reference.bottomCrop +
        (lineHeight - reference.lineHeight) * (reference.fontSize / 2),
      0
    ) / reference.fontSize

  return {
    lineHeight,
    display: "block",
    "&::before": {
      marginTop: `calc(-${dynamicCropTop}em - 1px + ${correction.top}px)`,
    },
    "&::after": {
      marginBottom: `calc(-${dynamicCropBottom}em - 1px + ${correction.bottom}px)`,
    },
    "&::before, &::after": {
      content: "''",
      display: "block",
      height: 0,
      paddingTop: "1px",
      width: 0,
    },
    display: "block",
  }
}
