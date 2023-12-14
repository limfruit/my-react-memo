import React from 'react'

const Modal = ({ children }) => {
  return (
    <>
        <div>모달창</div>
        <div>
            {children}
        </div>
    </>
  )
}

export default Modal