import React from 'react';

/* Styles */
import './App.css';

/* Components */
import Header from '../common/template/Header';
import TextGenerator from '../stop/TextGenerator';


const App = props => (
  <div className='wrapper'>
      <Header />
      <TextGenerator />
  </div>
)

export default App;