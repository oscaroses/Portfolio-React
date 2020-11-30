import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';

export default function Footer() {    
    return (
      <BottomNavigation style={{ background: 'black', color: 'white' }} className="footer">
         <span>2020</span> 
      </BottomNavigation>
    );
  }