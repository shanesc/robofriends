import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', borderTop: '2px solid black', height: '700px', paddingTop: '5px' }}>
      {props.children}
    </div>
  )
}

export default Scroll;