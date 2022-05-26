import React, { useState } from 'react'

const Filter = ({FilterMovie}) => {
  const [title, setTitle] = useState('')
    const getTitle = (e) =>{
      setTitle(e.target.value)
    }
    FilterMovie({title});
  return (
    <div>
     
    </div>
  )
}

export default Filter