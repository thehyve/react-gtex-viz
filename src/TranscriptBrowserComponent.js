import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {TranscriptBrowser} from 'gtex-d3'
require('typeface-libre-franklin')

class TranscriptBrowserComponent extends Component {
  element; /* HTMLDivElement */

  update() {
    // Remove existing children from the container element
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.lastChild)
    }
    // (Re)render the plot
    TranscriptBrowser.render(this.props.type, this.props.geneId, this.props.rootId,
      this.props.urls, this.props.fetchJson)
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Only update if any property has changed
    if (['type', 'geneId', 'rootId'].some(
      property => this.props[property] !== prevProps[property])) {
      this.update()
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Transcript browser</h3>
        <div id={this.props.rootId} style={{width: '100%'}} ref={(e) => { this.element = e }} />
      </React.Fragment>
    )
  }
}

TranscriptBrowserComponent.defaultPropTypes = {
  type: 'isoformTransposed',
  rootId: '',
  urls: null,
  fetchJson: null
}

TranscriptBrowserComponent.propTypes = {
  type: PropTypes.string,
  geneId: PropTypes.string,
  rootId: PropTypes.string,
  urls: PropTypes.object,
  fetchJson: PropTypes.func
}

export default TranscriptBrowserComponent
