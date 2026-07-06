import React from 'react'

function greeting({name}){
    return<h3>hello {name}</h3>

}

const Props = () => {
    const name="vinay"
  return (
    <div>
     <h1> props recap</h1>
     {greeting({name})}
    </div>
  )
}

export default Props

