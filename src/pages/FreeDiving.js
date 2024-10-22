import React from 'react'

function FreeDiving() {
  return (
    <div className='FreeDiving'>
      <h1>FreeDiving</h1>
      <div className='content'>
        <h2><a href='/FreeDiving/Aida'>AIDA System</a></h2>
        <h2><a href='/FreeDiving/Molchanovs'>Molchanovs System</a></h2>

        <ul>
            <li>STA ()</li>
            <li>DYN ()</li>
            <li>DYNB ()</li>
            <li>DNF ()</li>
            <li>CWT ()</li>
            <li>CWTB ()</li>
            <li>CNF ()</li>
            <li>FIM ()</li>
        </ul>
      </div>
    </div>
  )
}

export const Aida = () => {
  return (
    <div>
        <h1>Aida</h1>
    </div>
  )
}

export const Molchanovs = () => {
    return (
        <div className='FreeDiving'>
          <h1>Molchanovs</h1>
          <div className='content'>
            <h2>4.3 Lung Packing</h2>

            <h4>What is Lung Packing?</h4>
            <p>lung packing is </p>
            <h2>Chapter 5: EQUALIZATION</h2>
            
            
          </div>
        </div>
      )
}


export default FreeDiving;
