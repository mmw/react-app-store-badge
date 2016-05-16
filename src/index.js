import React from 'react';

import {
  iconStyle,
  textAppStoreStyle,
  textHeadingStyle
  wrapperStyle,
} from './styles';

export default function AppStoreBadge({
    url,
    icon,
    textHeading,
    textAppStore,
    primaryColor = "#ffffff",
    secondaryColor = "#000000"
  }) {
    return (
      <a
        className='ReactVendor--AppStoreButton'
        href={url}
        style={wrapperStyle(primaryColor, secondaryColor)}
      >
        {icon}
        <span style={textHeadingStyle(primaryColor)}>
          {textHeading}
        </span>
        <span style={textAppStoreStyle(primaryColor)}>
          {textAppStore}
        </span>
      </a>
    );
}
