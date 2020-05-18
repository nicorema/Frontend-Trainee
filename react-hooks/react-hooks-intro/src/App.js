import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{latitude,longitude,speed}, setLocation] = useState({
    latitude: null,
    longitude: null,
    speed: null,
  });
  let mounted = true;

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, [count]);

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
    }
  };

  const handleOnline = () => {
    setStatus(true);
  };
  const handleOffline = () => {
    setStatus(false);
  };

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}> Increase {count} times</button>{' '}
      <h2>Toggle Light</h2>
      <img
        alt='Flashlight'
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height: '50px',
          width: '50px',
        }}
        onClick={toggleLight}
      />
      <h2>Mouse Position</h2>
      <p>X position {mousePosition.x}</p>
      <p>Y position {mousePosition.y}</p>
      <h2>Network status</h2>
      <p>
        You are <strong>{status ? 'online' : 'offline'}</strong>
      </p>
      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Your speed is {speed ? speed : '0'}</p>
    </>
  );
};

export default App;
