import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Header from './component/Header';
import Topbar from './component/Topbar';
import Home from './component/Home';
import About from './component/About';
import HealthSolution from './component/HealthSolution';
import Departments from './component/Departments';
import Clients from './component/Clients';
import SuccessPage from './component/SuccessPage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Home />
      <HealthSolution />
      <About />
      <Departments />
      <Clients />
      <SuccessPage />
      <Footer />
    </div>
  );
}

export default App;
