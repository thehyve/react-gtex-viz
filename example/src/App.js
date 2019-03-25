import React, { Component } from 'react'

import {TranscriptBrowserComponent} from 'react-gtex-viz'

export default class App extends Component {
  render () {
    return (
      <div>
        <TranscriptBrowserComponent rootId='transcriptBrowser' type='isoformTransposed' geneId='ENSG00000130164' />
      </div>
    )
  }
}
