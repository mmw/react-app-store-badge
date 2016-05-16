import React from 'react';

import {
  iconStyle,
  textHeadingStyle,
  textStoreNameStyle,
  wrapperStyle
} from './styles';

export default function ReactAppStoreBadge({
    url,
    icon,
    textHeading,
    textStoreName,
    primaryColor = "#ffffff",
    secondaryColor = "#000000"
  }) {
    return (
      <a
        className='ReactVendor--AppStoreButton'
        href={url}
        style={wrapperStyle(primaryColor, secondaryColor)}
      >
        <i style={iconStyle(primaryColor)}>{icon}</i>
        <span style={textHeadingStyle(primaryColor)}>
          {textHeading}
        </span>
        <span style={textStoreNameStyle(primaryColor)}>
          {textStoreName}
        </span>
      </a>
    );
}
