import React from 'react';

import {
  wrapperStyle,
  textAppStoreStyle,
  iconStyle,
  textHeadingStyle
} from './styles';

export default function AppStoreBadge({
    url,
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
        <i style={iconStyle(primaryColor)}>A</i>

        <span style={textHeadingStyle(primaryColor)}>
          {textHeading || 'Available on the'}
        </span>
        <span style={textAppStoreStyle(primaryColor)}>
          {textAppStore || 'App Store'}
        </span>
      </a>
    );
}
