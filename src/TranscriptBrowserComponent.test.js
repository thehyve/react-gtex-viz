import React from 'react'
import {TranscriptBrowserComponent} from './'
import {mount} from 'enzyme'

describe('TranscriptBrowserComponent', () => {
  it('is truthy', () => {
    expect(TranscriptBrowserComponent).toBeTruthy()
  });

  it('mounts the component', () => {
    const component = mount(
      <TranscriptBrowserComponent
        geneId='ENSG00000130164'
        rootId='transcriptBrowser'
        type='exon' />)
    expect(component).toBeTruthy()
    expect(component.find('div').length).toBe(1)
  })
})
