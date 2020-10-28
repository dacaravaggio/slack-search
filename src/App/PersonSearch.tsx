import React from 'react'
import styled from 'styled-components'
import FilterPerson from './FilterInputs'

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 3rem;
`

const Frame = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 0 5rem 5rem 5rem;
`

const PersonSearch: React.FC = () => {
  return (
    <Container>
      <Frame>
        <div style={{ width: '400px' }}>
          <FilterPerson />
        </div>
      </Frame>
    </Container>
  )
}

export default PersonSearch
