import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
        <p>
          KietHo da lam git thanh cong!!!
        </p>
        <p>Day la noi dung bai hoc:</p>
        <p>
          <p>Đưa React Project lên Github:</p>
          <p>git remote add origin git@github.com:kiethostartup/FirstProject.git</p>
          <p>git push -u origin master</p>
        </p>
      </header>
    </div>
  );
}

export default App;
