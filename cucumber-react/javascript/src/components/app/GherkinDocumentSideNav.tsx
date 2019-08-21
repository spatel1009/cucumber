import { messages } from 'cucumber-messages'
import { OnSelectionListener } from 'react-sidenav/types'
import React from 'react'
import { Nav, NavContext, SideNav } from 'react-sidenav'
import styled from 'styled-components'
import statusColor from '../gherkin/statusColor'

interface IGherkinDocumentItemDivProps {
  selected: boolean
  status: messages.TestResult.Status
}

const GherkinDocumentItemDiv = styled.div`
  color: ${(props: IGherkinDocumentItemDivProps) =>
  props.selected ? 'blue' : 'inherit'};
  background-color: ${(props: IGherkinDocumentItemDivProps) => statusColor(props.status)};
  padding: 8px 12px;
  cursor: pointer;
  :hover {
    color: blue;
  }
`

interface IGherkinDocumentItemProps {
  status: messages.TestResult.Status
}

const GherkinDocumentItem: React.FunctionComponent<IGherkinDocumentItemProps> = ({ status, children }) => {
  const context = React.useContext(NavContext)
  return (
    <GherkinDocumentItemDiv selected={context.selected} status={status}>
      {children}
    </GherkinDocumentItemDiv>
  )
}

interface IGherkinDocumentNavProps {
  gherkinDocuments: messages.IGherkinDocument[]
  selectedUri: string
  onSelection: OnSelectionListener
}

const GherkinDocumentSideNav: React.FunctionComponent<IGherkinDocumentNavProps> = ({ gherkinDocuments, selectedUri, onSelection }) => {
  return (
    <SideNav defaultSelectedPath={selectedUri} onSelection={onSelection}>
      {gherkinDocuments.map(gherkinDocument => (
        <Nav key={gherkinDocument.uri} id={gherkinDocument.uri}>
          <GherkinDocumentItem key={gherkinDocument.uri} status={messages.TestResult.Status.FAILED}>
            {gherkinDocument.uri}
          </GherkinDocumentItem>
        </Nav>
      ))}
    </SideNav>
  )
}

export default GherkinDocumentSideNav
