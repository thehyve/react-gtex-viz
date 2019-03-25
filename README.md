# react-gtex-viz

React components for visualisations from the GTEx web portal

[![NPM](https://img.shields.io/npm/v/react-gtex-viz.svg)](https://www.npmjs.com/package/react-gtex-viz) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-gtex-viz
```

## Usage

```jsx
import React, { Component } from 'react'

import TranscriptBrowserComponent from 'react-gtex-viz'

class Example extends Component {
  render () {
    return (
      <TranscriptBrowserComponent rootId='transcriptBrowser' type='isoformTransposed' geneId='ENSG00000130164' />
    )
  }
}
```

## License

 BSD-3-Clause © [The Hyve](https://github.com/thehyve)
