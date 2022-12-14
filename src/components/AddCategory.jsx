import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return //Empty string

    //setCategories(categories => [inputValue, ...categories ])
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>

      <input 
      // Poperties in HTML
        type="text"
        placeholder="Search Gif"
        value={ inputValue }
        onChange= { onInputChange }
        
      />
    </form>
  )
}
