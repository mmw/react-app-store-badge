import React from 'react';
import ReactDOM from 'react-dom';

import ReactAppStoreBadge from './index';

function Example() {
  return (
    <div>
      <ReactAppStoreBadge
        textHeading="Available on the"
        textStoreName="App Store"
        icon={<i>A</i>}
        url="www.myappstoreplaceholder.com"
        wrapperStyleOverride={{ fontFamily: "monospace" }}
      />
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('example'));
