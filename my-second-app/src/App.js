import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
class App extends React.Component {

  render() {
    return (
      <div>
        <Header className="prueba" />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
