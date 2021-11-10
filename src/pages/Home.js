import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greeting/greetingSlice';
import Greeting from '../components/Greeting';

const Home = () => {
  const dispatch = useDispatch();
  const { status, greeting } = useSelector((state) => state.greeting);
  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchRandomGreeting());
    }
  }, [status]);
  return (
    <Greeting
      language={greeting.language}
      flagCode={greeting.flagCode}
      message={greeting.message}
    />
  );
};

export default Home;
