import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CodeSnippet } from './pages/'

const App = () => {

  return (
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<CodeSnippet/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;