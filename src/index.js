import React from 'react';
import { compose, setPropTypes, pure } from 'recompose';

import {
  wrapperStyle,
  textAppStoreStyle,
  iconStyle,
  textHeadingStyle
} from './styles';

function AppStoreBadge({ url, textHeading, textAppStore }) {
  return (
    <a
      className='ReactVendor--AppStoreButton'
      href={url}
      style={wrapperStyle}
    >
      <i style={iconStyle}>A</i>

      <span style={textHeadingStyle}>
        {textHeading || 'Available on the'}
      </span>
      <span style={textAppStoreStyle}>
        {textAppStore || 'App Store'}
      </span>
    </a>
  );
}

export default compose(
  setPropTypes({
    downloadLink: React.PropTypes.string.isRequired,
    textHeading: React.PropTypes.string,
    textAppStore: React.PropTypes.string
  }),
  pure
)(AppStoreBadge);
