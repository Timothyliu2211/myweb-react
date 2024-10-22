import React from 'react'

function TOEFL() {
  return (
    <div className='TOEFL'>
      <h1>TOEFL</h1>
      <div className='content'>
        <h2><a href='/TOEFL/Reading'>Reading</a></h2>
        <h2><a href='/TOEFL/Listening'>Listening</a></h2>
        <h2><a href='/TOEFL/Speaking'>Speaking</a></h2>
        <h2><a href='/TOEFL/Writeing'>Writeing</a></h2>
      </div>
    </div>
  )
}

export const Reading = () => {
    return (
        <div className='Reading'>
          <h1>Reading</h1>
          <div className='content'>
            <h2>Section 1</h2>
            <pre>2篇學術類文章，每篇文章長度為650～750個詞。
      


            </pre>

          </div>
        </div>
      )
}

export const Listening = () => {
    return (
        <div className='Listening'>
          <h1>Listening</h1>
          <div className='content'>
                 
          </div>
        </div>
      )
}

export const Speaking = () => {
    return (
        <div className='Speaking'>
          <h1>Speaking</h1>
          <div className='content'>
                 
          </div>
        </div>
      )
}

export const Writing = () => {
    return (
        <div className='Writing'>
          <h1>Writing</h1>
          <div className='content'>
                 
          </div>
        </div>
      )
}


export default TOEFL;