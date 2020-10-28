import React from 'react'

const SearchInput: React.FC<{ onSearchChange: Function }> = ({
  onSearchChange,
}) => {
  let typingTimer = setTimeout(() => {}, 500)

  const getSearchResults = (inputValue: string) => {
    onSearchChange(inputValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() => {
      getSearchResults(val)
    }, 500)
  }

  return (
    <div style={{ paddingBottom: '15px' }}>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default SearchInput
