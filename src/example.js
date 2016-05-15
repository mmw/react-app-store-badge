import React from 'react';
import ReactDOM from 'react-dom';

import AppStoreBadge from './index';

function Example() {
  return (
    <div>
      <AppStoreBadge url="123" />
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('example'));
