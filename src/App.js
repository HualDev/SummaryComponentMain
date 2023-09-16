
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Summary from './components/summary';

function App() {
  return (
    <div className="app">
      <div className='app-container'>
        <Header />
        <Summary />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
