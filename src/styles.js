function wrapperStyle(primaryColor, secondaryColor) {
  return {
    color: primaryColor,
    backgroundColor: secondaryColor,
    border: `1px solid ${primaryColor}`,
    borderRadius: '3px',
    display: 'inline-block',
    boxSizing: 'border-box',
    fontWeight: 'normal',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    height: '66px',
    marigin: '24px 12px 6px 0',
    padding: '9px 0',
    textAlign: 'center',
    textDecoration: 'none',
    width: '192px'
  };
}

function textAppStoreStyle(primaryColor) {
    return {
    color: primaryColor,
    fontSize: '18px',
    boxSizing: 'border-box',
    lineHeight: '24px',
    position: 'relative',
    top: '-3px',
    textTransform: 'none'
  };
}

function iconStyle(primaryColor) {
    return {
    color: primaryColor,
    display: 'block',
    boxSizing: 'border-box',
    float: 'left',
    fontSize: '40px',
    lineHeight: 1.3,
    position: 'relative',
    left: '15px'
  };
}

function textHeadingStyle(primaryColor) {
  return {
    color: primaryColor,
    display: 'block',
    fontSize: '9px',
    boxSizing: 'border-box',
    lineHeight: '24px',
    textTransform: 'uppercase'
  };
}

export {
  wrapperStyle,
  textAppStoreStyle,
  iconStyle,
  textHeadingStyle
};
