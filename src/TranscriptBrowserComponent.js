import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {TranscriptBrowser} from 'gtex-d3'
// import 'gtex-d3/css/dendrogram.css'
// import 'gtex-d3/css/expressMap.css'
// import 'gtex-d3/css/isoform.css'
require('typeface-libre-franklin')

class TranscriptBrowserComponent extends Component {
  update() {
    TranscriptBrowser.render(this.props.type, this.props.geneId, this.props.rootId, this.props.urls)
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate = () => {
    this.update()
  };

  render() {
    return (
      <React.Fragment>
        <h3>Transcript browser</h3>
        <div id={this.props.rootId} style={{width: '80%'}} />
      </React.Fragment>
    )
  }
}

TranscriptBrowserComponent.defaultPropTypes = {
  type: 'isoformTransposed',
  rootId: '',
  urls: null
}

TranscriptBrowserComponent.propTypes = {
  type: PropTypes.string,
  geneId: PropTypes.string,
  rootId: PropTypes.string,
  urls: PropTypes.object
}

export default TranscriptBrowserComponent
