import React from 'react'

const Comments = () => {

  const handleSubmit = (e) => {
    return console.log("THIS HANDLE WORKS", e)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Comments'/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Comments