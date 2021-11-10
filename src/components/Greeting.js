import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greeting/greetingSlice';

const Greeting = (props) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.greeting);
  const { language, flagCode, message } = props;

  const flag = () => {
    if (flagCode === '') {
      return '';
    }
    const flagCodes = flagCode.split('-');
    return String.fromCodePoint(flagCodes[0], flagCodes[1]);
  };

  const newGreeting = () => {
    dispatch(fetchRandomGreeting());
  };

  const loadContainer = (className = '') => (
    <div className={`container ${className}`}>
      <h1>React-Rails!</h1>
      <div className="language-flag">
        <h2>{language}</h2>
        <span className="emoji">{flag()}</span>
      </div>
      <h2>{message}</h2>
      <button className="random" type="button" onClick={newGreeting}>
        Random
      </button>
    </div>
  );

  return (
    <main>
      {status === 'default' ? loadContainer() : loadContainer('load')}
    </main>
  );
};

Greeting.propTypes = {
  language: PropTypes.string,
  flagCode: PropTypes.string,
  message: PropTypes.string,
};

Greeting.defaultProps = {
  language: '',
  flagCode: '',
  message: '',
};

export default Greeting;
