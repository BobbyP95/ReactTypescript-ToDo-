import React from 'react'

interface Props{
    all:()=>void
    comp:()=>void
    uncomp:()=>void
}

export const Filter = ({all,comp,uncomp}:Props) => {
  return (
    <div>
        <button onClick={()=>all()}>All</button>
        <button onClick={()=>comp()}>Comp</button>
        <button onClick={()=>uncomp()}>Uncomp</button>
    </div>
  )
}
