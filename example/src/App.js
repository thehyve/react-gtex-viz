import React, { Component } from 'react'

import {TranscriptBrowserComponent} from 'react-gtex-viz'

export default class App extends Component {
  state = {
    geneSearch: 'ENSG00000130164',
    gene: 'ENSG00000130164'
  }

  updateGene(event) {
    this.setState({geneSearch: event.target.value})
  }

  searchGene() {
    this.setState({gene: this.state.geneSearch})
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.geneSearch} onChange={(event) => this.updateGene(event)} />
        <button onClick={() => this.searchGene()}>Search</button>
        <TranscriptBrowserComponent rootId='transcriptBrowser' type='isoformTransposed' geneId={this.state.gene} />
      </div>
    )
  }
}
