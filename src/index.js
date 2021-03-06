import React from 'react';
import merge from 'lodash/fp/merge';

// Styles

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
    margin: '24px 12px 6px 0',
    padding: '9px 0',
    textAlign: 'center',
    textDecoration: 'none',
    WebkitFontSmoothing: 'antialiased',
    width: '192px'
  };
}

function textStoreNameStyle(primaryColor) {
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
    left: '15px',
    top: '-3px'
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

// Component

function ReactAppStoreBadge({
    url,
    icon,
    textHeading,
    textStoreName,
    primaryColor = "#ffffff",
    secondaryColor = "#000000",
    wrapperStyleOverride,
    iconStyleOverride,
    textHeadingStyleOverride,
    textStoreNameStyleOverride
  }) {
    return (
      <a
        className='ReactVendor--AppStoreButton'
        href={url}
        style={merge(wrapperStyle(primaryColor, secondaryColor), wrapperStyleOverride)}
      >
        <i style={merge(iconStyle(primaryColor), iconStyleOverride)}>{icon}</i>
        <span style={merge(textHeadingStyle(primaryColor), textHeadingStyleOverride)}>
          {textHeading}
        </span>
        <span style={merge(textStoreNameStyle(primaryColor), textStoreNameStyleOverride)}>
          {textStoreName}
        </span>
      </a>
    );
}

export default ReactAppStoreBadge;
