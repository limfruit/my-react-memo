import React from 'react'

const MemoForm = () => {
  return (
    <>
      <h1>Memo</h1>
      <form>
        <div>
          <label>Title</label>
          <input />

        </div>
        <div>
          <label>Writer</label>
          <input />
        </div>
        <div>
          <label>Content</label>
          <input />          
        </div>
      </form>
      <button>등록</button>

    </>
  )
}

export default MemoForm