// App.js
import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    birthDate: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.birthDate) {
      errors.birthDate = 'Birth date is required';
    }

    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
