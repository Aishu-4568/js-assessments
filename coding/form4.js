//4.Write a React component that handles form submission and validation.
import React, { useState } from 'react';


const SimpleForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!name || !email) {
      setError('Both fields are required');
      setSubmitted(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      setSubmitted(false);
      return;
    }

    
    setError('');
    setSubmitted(true);
    console.log('Form data:', { name, email });
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {submitted && !error && <p>Form submitted successfully!</p>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
