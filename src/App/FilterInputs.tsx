import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const ResultList = styled.div`
  height: 85%;
  overflow-y: scroll;
`

const Result = styled.div`
  margin-bottom: 20px;
`

const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
`

interface Person {
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

const FilterInputs: FC = () => {
  const [fullResults, setFullResults] = useState<Person[]>([])
  const [filteredResults, setFilteredResults] = useState<Person[]>([])

  useEffect(() => {
    fetch(
      'https://randomuser.me/api/?results=100&nat=us&inc=name,email,id,picture'
    )
      .then(res => res.json())
      .then(
        result => {
          setFullResults(result.results)
          setFilteredResults(result.results)
        },
        error => {
          console.error('error getting random users', error)
        }
      )
  }, [])

  function handleSearchChange(searchText: string) {
    searchText = searchText.toLowerCase()

    const filtered = fullResults.filter(p => {
      return (
        p.name.last.toLowerCase().startsWith(searchText) ||
        p.email.toLowerCase().startsWith(searchText)
      )
    })

    setFilteredResults(filtered)
  }

  return (
    <>
      Have fun searching!
      <br />
      <br />
      <Header>Enter Search</Header>
      <SearchInput onSearchChange={handleSearchChange} />
      <Header>Results</Header>
      <ResultList>
        {filteredResults &&
          filteredResults.map(p => (
            <Result key={p.email}>
              <img
                src={p.picture.thumbnail}
                alt={`${p.name.first} ${p.name.last}`}
              />
              <br />
              <b>
                {p.name.first} {p.name.last}
              </b>
              <br />
              {p.email}
            </Result>
          ))}
      </ResultList>
    </>
  )
}

export default FilterInputs
