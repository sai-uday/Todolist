import React from 'react';


function Bigspinner(){
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure vertical centering
  };

  return (
    <div className="p-3 m-0 border-0 bd-example m-0 border-0" style={centerStyle}>
      {/* Spinner */}
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Bigspinner;
