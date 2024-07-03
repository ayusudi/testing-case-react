import { useState } from "react"

export default function Component({ search }) {
  const [input, setInput] = useState('')
  const submitSearch = (e) => {
    e.preventDefault()
    search(input)
    setInput('')
  }
  return (
    <nav class="navbar navbar-expand-lg bg-warning border-bottom border-body px-2" >
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <h3 className="m-0">My Recipe</h3>
        <form class="d-flex" role="search" onSubmit={submitSearch}>
          <input value={input} onChange={(e) => setInput(e.target.value)} class="form-control me-2" type="search" placeholder="Recipe Name" aria-label="Search" />
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}