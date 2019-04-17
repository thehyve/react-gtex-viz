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

  it('updates the component', () => {
    const component = mount(
      <TranscriptBrowserComponent
        geneId='ENSG00000130164'
        rootId='transcriptBrowser'
        type='exon' />)
    expect(component).toBeTruthy()
    expect(component.find('div').length).toBe(1)
    component.setProps({geneId: 'ENSG00000130164'})
    expect(component).toBeTruthy()
    expect(component.find('div').length).toBe(1)
    component.setProps({geneId: 'TP53'})
    expect(component).toBeTruthy()
    expect(component.find('div').length).toBe(1)
  })

  const host = 'https://example.com/rest/v1'
  const apiBase = `${host}/rest/v1`
  const dataSetId = 'gtex_v7'
  const genomeBuild = 'GRCh37%2Fhg19'
  const gencodeVersion = 'v19'
  const urls = {
    // transcript, exon, junction expression specific
    exonExp: `${apiBase}/expression/medianExonExpression?datasetId=${dataSetId}&hcluster=true&gencodeId=`,
    transcriptExp: `${apiBase}/expression/medianTranscriptExpression?datasetId=${dataSetId}&hcluster=true&gencodeId=`,
    junctionExp: `${apiBase}/expression/medianJunctionExpression?datasetId=${dataSetId}&hcluster=true&gencodeId=`,
    transcript: `${apiBase}/reference/transcript?datasetId=${dataSetId}&gencodeId=`,
    exon: `${apiBase}/reference/exon?datasetId=${dataSetId}&gencodeId=`,
    geneModel: `${apiBase}/dataset/collapsedGeneModelExon?datasetId=${dataSetId}&gencodeId=`,
    geneModelUnfiltered: `${apiBase}/dataset/fullCollapsedGeneModelExon?datasetId=${dataSetId}&gencodeId=`,

    tissue: `${apiBase}/dataset/tissueInfo?format=json&datasetId=${dataSetId}`,

    geneId: `${apiBase}/reference/gene?format=json&gencodeVersion=${gencodeVersion}&genomeBuild=${genomeBuild}&geneId=`
  }

  const mockFetchJson = (info, init) => {
    if (info.startsWith(urls.geneId)) {
      return Promise.resolve({gene: [{}]})
    }
    return Promise.resolve({})
  }

  it('updates the component with custom urls and fetch function', () => {
    const component = mount(
      <TranscriptBrowserComponent
        geneId='ENSG00000130164'
        rootId='transcriptBrowser'
        type='exon'
        urls={urls}
        fetchJson={mockFetchJson}
      />)
    expect(component).toBeTruthy()
    expect(component.find('div').length).toBe(1)
    component.setProps({geneId: 'ENSG00000130164'})
    expect(component).toBeTruthy()
  })
})
