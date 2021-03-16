import React from "react"
import PropTypes from "prop-types"

/**
 * Primary UI component for user interaction
 */

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "primary" : "secondary"
  return (
    <button
      type="button"
      css={{
        fontFamily:
          "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 700,
        border: "0",
        borderRadius: "3em",
        cursor: "pointer",
        display: "inline-block",
        lineHeight: "1",
        "&.primary": {
          color: "white",
          backgroundColor: "#1ea7fd",
        },
        "&.secondary": {
          color: "#333",
          backgroundColor: "transparent",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
        },
        "&.small": {
          fontSize: "12px",
          padding: "10px 16px",
        },
        "&.medium": {
          fontSize: "14px",
          padding: "11px 20px",
        },
        "&.large": {
          fontSize: "16px",
          padding: "12px 24px",
        },
      }}
      style={{ backgroundColor }}
      className={[size, mode].join(" ")}
      {...{ ...props }}>
      {label}
    </button>
  )
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
}
