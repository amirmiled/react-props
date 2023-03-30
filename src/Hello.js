import React from 'react'
import PropTypes from 'prop-types';
const Hello = ({nom,prenom,alertMe}) => {
    
  return (
    <div>
     <h1 >My name is {nom} , my lastname is {prenom}</h1>
     <button onClick={alertMe}> Click me</button>
    </div>
  )
}
Hello.defaultProps={
    esm:12354,
    la9ab:'ben falten'
}
Hello.propTypes={
esm: PropTypes.string,
}
export default Hello
