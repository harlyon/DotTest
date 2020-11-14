import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import NewsState from './context/newsState';
import Main from './component/Main';

function App() {
  return (
    <NewsState>
      <BrowserRouter>
        <Route exact path="/" component = {Main} />
      </BrowserRouter>
    </NewsState>
  );
}

export default App;
