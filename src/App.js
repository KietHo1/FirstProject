import './App.css';
import logo from './logo.svg';
function App() {
  return (
   <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p className="Hello">Chào mừng bạn đến với website truyện JOJO của Kiệt Hồ</p>
      <form className='form'>
        <p className="Please">Vui lòng để thông tin của bạn để chúng tôi biết</p>
        <p className="Ho">Họ và chữ lót:</p>
        <input type="text" className="fisrtname" /><br></br>
        <p className = "Ten">Tên:</p>
        <input type="text" className="name" /><br></br>
        <p className = "SDT">Số điện thoại:</p>
        <input type="text" className="telenumber" /><br></br>
      </form>
      <div className="phan1">
        <div className="phancon1">
          <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/JoJo_Part_1_Phantom_Blood.jpg/250px-JoJo_Part_1_Phantom_Blood.jpg" 
          className="images1" alt="images1"></img>
          <p className = "p1">JoJo phần 1</p>
        </div>
        <div className="phancon2">
          <img src = "https://upload.wikimedia.org/wikipedia/vi/d/d4/Jojo_vol_11.jpg" 
          className="images2" alt="images2"></img>
          <p className="p2">JoJo phần 2</p>
        </div>
      </div>
      <img src='https://cdn.vinshine.com/img/60f7bf1d0bc99426cac2388fe1b6e416442e04059ba626d5cd2507f27a4dfc7788bec6631afb6a74ff77a52a1336179312e87ba794ac5cf5.jpg?referer=60f7bf1d0bc994266d573f4b63d84278f6930556344116c3' 
      className = 'id0' alt='images'></img>
        <p className = 'id1'>
        <p>Cảm ơn các bạn đã ghé thăm trang web của tôi!</p>
        <p>© 2022 GitHub, Inc. https://github.com/KietHo1/FirstProject</p>
        </p>
      </header>
    </div>
  );
}

export default App;
