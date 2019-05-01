import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../client/components/Home'

export default () => `<html>
    <head>
    </head>
    <body>
        <div id="root">${renderToString(<Home />)}</div>
        <script src="bundle.js"></script>
    </body>
</html>`