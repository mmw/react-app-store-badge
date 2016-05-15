import React from 'react';
import { compose, setPropTypes, pure } from 'recompose';

function AppStoreButton({ url, textHeading, textAppStore }) {
  return (
    <a href={url} className="ReactVendor--AppStoreButton">
      <i>A</i>
      <span>{textHeading || 'Available on the'}</span>
      <span>{textAppStore || 'App Store'}</span>
    </a>
  );
}

export default compose(
  setPropTypes({
    url: React.PropTypes.string.isRequired,
    textHeading: React.PropTypes.string,
    textAppStore: React.PropTypes.string,
  }),
  pure
)(AppStoreButton);
