import React from 'react';

function AppStoreBadge({ url, textHeading, textAppStore }) {
  return (
    <a href={url} className="ReactVendor--AppStoreButton">
      <i>A</i>
      <span>{textHeading || 'Available on the'}</span>
      <span>{textAppStore || 'App Store'}</span>
    </a>
  );
}

export default AppStoreBadge;
