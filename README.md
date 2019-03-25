# react-gtex-viz

React components for visualisations from the [GTEx web portal].
Based on the [gtex-viz] Javascript library.

[![NPM](https://img.shields.io/npm/v/react-gtex-viz.svg)](https://www.npmjs.com/package/react-gtex-viz)
[![Build Status](https://travis-ci.org/thehyve/react-gtex-viz.svg?branch=master)](https://travis-ci.org/thehyve/react-gtex-viz/branches)
[![codecov](https://codecov.io/gh/thehyve/react-gtex-viz/branch/master/graph/badge.svg)](https://codecov.io/gh/thehyve/react-gtex-viz)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# npm install --save react-gtex-viz
npm install --save thehyve/react-gtex-viz
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
