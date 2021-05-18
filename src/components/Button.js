import PropTypes from 'prop-types'

const Button = ({color,text, onClick}) => {
    return <button style={{backgroundColor :color }} className='btn'>{text}</button>
}

Button.defaultProps ={
    text : "Add Here",
    color : 'white',
    backgroundColor : 'steelblue'
}

Button.propTypes ={
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func
}

export default Button
