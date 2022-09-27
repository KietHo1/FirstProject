import './App.css';
import logo from './logo.svg';
function App() {
  return (
   <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <img src="https://bloganchoi.com/wp-content/uploads/2016/07/key-west-hoang-hon-5.jpg"></img>
        <p>
          KietHo đã làm git thành công!!!
        </p>
        <p>Đây là nội dung bài học:</p>
        <p>
          <p>Đưa React Project lên Github:</p>
          <p>git remote add origin git@github.com:kiethostartup/FirstProject.git</p>
          <p>git push -u origin master</p>
        </p>
        <p>Cảm ơn các bạn đã ghé thăm trang web của tôi!</p>
      </header>
    </div>
  );
}

export default App;
