import './App.css';
import logo from './logo.svg';
function App() {
  return (
   <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>Chào mừng bạn đến với website truyện của Kiệt Hồ</p>
      <form>
        <p>Vui lòng để thông tin của bạn để chúng tối biết</p>
        <p className="Ho">Họ và chữ lót:</p>
        <input type="text" id="fisrtname" /><br></br>
        <p className = "Ten">Tên:</p>
        <input type="text" id="name" /><br></br>
        <p className = "SDT">Số điện thoại:</p>
        <input type="text" id="telenumber" /><br></br>
      </form>
      <img src='https://cdn.vinshine.com/img/60f7bf1d0bc99426cac2388fe1b6e416442e04059ba626d5cd2507f27a4dfc7788bec6631afb6a74ff77a52a1336179312e87ba794ac5cf5.jpg?referer=60f7bf1d0bc994266d573f4b63d84278f6930556344116c3' 
      id = 'id0' alt='images'></img>
        <p id = 'id1'>
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
