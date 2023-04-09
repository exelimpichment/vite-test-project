import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SignupForm from './SignupForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <SignupForm />
    </div>
  );
}

export default App;
