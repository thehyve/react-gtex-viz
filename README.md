# react-gtex-viz

React components for visualisations from the [GTEx web portal].
Based on the [gtex-viz] Javascript library.

[![build status](https://img.shields.io/travis/thehyve/react-gtex-viz/master.svg?style=flat-square)](https://travis-ci.org/thehyve/react-gtex-viz)
[![npm version](https://img.shields.io/npm/v/react-gtex-viz.svg?style=flat-square)](https://www.npmjs.com/package/react-gtex-viz)
[![codecov](https://img.shields.io/codecov/c/github/thehyve/react-gtex-viz.svg?style=flat-square)](https://codecov.io/gh/thehyve/react-gtex-viz)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

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

BSD-3-Clause © 2019 [The Hyve](https://github.com/thehyve).


[GTEx web portal]: https://gtexportal.org
[gtex-viz]: https://github.com/broadinstitute/gtex-viz
