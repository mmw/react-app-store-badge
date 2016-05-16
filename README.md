# app-store-badge
A simple customizable App Store badge component for React.

__NOTE: THIS IS A FIRST BUILD THAT HASN'T BEEN TESTED IN THE WILD YET. USE AT YOUR OWN DISCRETION__

## Getting started

To setup dev dependencies
```bash
npm install
```

To build dist file
```bash
npm run build
```

To run example server
```bash
npm run example
```

_note: requires node/npm_

## Usage

Create badges in the App Store styles as seen on the Apple App Store and Google Play. You may choose primary (text, icon, and border) and secondary (background) colors. Colors default to white and black respectively.

Provide your own _font based_ icon. For example using a tool like [fontello](http://fontello.com/)

_example:_

```javascript
import ReactAppStoreBadge from 'react-app-store-badge';
// or
var ReactAppStoreBadge = require('react-app-store-badge');

// then in your `render` method's return
<ReactAppStoreBadge
  textHeading="Available on the"
  textStoreName="App Store"
  icon={<i className="icon-my-icon" />}
  url="www.myappstoreplaceholder.com"
/>
```
