import React from 'react'

const ImageModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div onClick={handleClose} className={showHideClassName}>
      <section className='modal-main'>
        <center>
        {children}
        </center>
      </section>
    </div>
  )
}

export default ImageModal
