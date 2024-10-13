import React from 'react'

function DrawsContainer({children}:React.PropsWithChildren) {
  return (

    <div className="columns-5 gap-5 mt-5 p-7" >{children}</div>
  )
}

export default DrawsContainer