import React from 'react'

function Item(props) {
  return (
    <div style={{width: 200, verticalAlign: 'top', display:'inline-block', textAlign:'left'}}>
      <img src={'https://via.placeholder.com/154x240'} alt={'Item'}/>
      <div style={{display:'flex', flexDirection:'row'}}>
        <p style={{color:'#677077', padding: 0, marginBottom: 2}}>{props.genre}</p>
        <p style={{color:'#677077', padding: 0, marginBottom: 2}}>,</p>
        <p style={{color:'#677077', padding: 0, marginBottom: 2, marginLeft: 5}}> {props.year}</p>
      </div>
      <p style={{color:'white', textAlign: 'left', padding: 0, marginTop: 2}}>{props.name}</p>
    </div>
  )
}

export default Item