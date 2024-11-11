import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Screen({ title, onclick , label ,to }) {  // Ensure title is destructured from props
  return (
    <div>
      <div className='flex justify-between p-6 bg-[#1E2D3B]'> {/* Dark teal/navy blue */}
        <h1 className='text-2xl text-[#F7FAFC]'>{title}</h1> {/* Display title */}
        <Button 
          type='primary' 
          onClick={onclick} 
          style={{ backgroundColor: '#3b82f6', borderColor: '#4A5568' }} ><Link to={to}>{label}</Link>
        </Button>
      </div>
    </div>
  );
}
