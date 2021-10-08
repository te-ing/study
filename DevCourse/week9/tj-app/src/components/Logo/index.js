import logo from './logo.svg';
import PropTypes from 'prop-types';

function Logo(props) {
  return(
    <img src={logo} className="App-logo" alt="logo" 
    style={{ width: props.size, height: props.size }} />
  )
}

Logo.defaultProps = {
  size: 300,
}

Logo.propTypes = {
  size: PropTypes.number
}

export default Logo;

