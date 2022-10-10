import "./App.css";
import logo from "./logo.svg";
import { React } from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="TieuDe">
          <img
            src="https://truyencc.com/images/logo.png"
            className="imagesheader"
            alt="imagesheader"
          ></img>
          <a href="../" className="TrangChu">
            <p className="TieuDe1">Trang Chủ</p>
          </a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <img
          className="AnhBia"
          src="https://wallpapercave.com/wp/wp2200981.jpg"
          alt="AnhBia"
        ></img>
        <p className="Hello">
          Chào mừng bạn đến với website truyện JOJO của Kiệt Hồ
        </p>
        <form className="form">
          <p className="Please">
            Vui lòng để thông tin của bạn để chúng tôi biết
          </p>
          <p className="Ho">Họ và chữ lót:</p>
          <input type="text" className="fisrtname" />
          <br></br>
          <p className="Ten">Tên:</p>
          <input type="text" className="name" />
          <br></br>
          <p className="SDT">Số điện thoại:</p>
          <input type="text" className="telenumber" />
          <br></br>
        </form>

        <div className="phan1">
          <div className="phancon1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/JoJo_Part_1_Phantom_Blood.jpg/250px-JoJo_Part_1_Phantom_Blood.jpg"
              className="images1"
              alt="images1"
            ></img>
            <a href="https://jojo.fandom.com/wiki/Phantom_Blood" className="a1">
              <p className="p1">JoJo phần 1</p>
            </a>
          </div>
          <div className="phancon2">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/d/d4/Jojo_vol_11.jpg"
              className="images2"
              alt="images2"
            ></img>
            <a
              href="https://jojo.fandom.com/wiki/Battle_Tendency"
              className="a2"
            >
              <p className="p2">JoJo phần 2</p>
            </a>
          </div>
        </div>
        <div className="phan2">
          <div className="phancon3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/75/JoJo_Part_3_Stardust_Crusaders.jpg"
              className="images3"
              alt="images3"
            ></img>
            <a
              href="https://jojo.fandom.com/wiki/Stardust_Crusaders"
              className="a3"
            >
              <p className="p3">JoJo phần 3</p>
            </a>
          </div>
          <div className="phancon4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/87/Part_4_Final_Poster.png"
              className="images4"
              alt="images4"
            ></img>
            <a
              href="https://jojo.fandom.com/wiki/Diamond_is_Unbreakable"
              className="a4"
            >
              <p className="p4">JoJo phần 4</p>
            </a>
          </div>
        </div>

        <div className="phan3">
          <div className="phancon5">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/66/JoJo_Part_5_Golden_Wind.jpg"
              className="images5"
              alt="images5"
            ></img>
            <a href="https://jojo.fandom.com/wiki/Vento_Aureo" className="a5">
              <p className="p5">JoJo phần 5</p>
            </a>
          </div>
          <div className="phancon6">
            <img
              src="http://pm1.narvii.com/5883/b4178b2fdba43057f662b27dd22c4ad535cb1d8c_00.jpg"
              className="images6"
              alt="images6"
            ></img>
            <a href="https://jojo.fandom.com/wiki/Stone_Ocean" className="a6">
              <p className="p6">JoJo phần 6</p>
            </a>
          </div>
        </div>

        <div className="phan4">
          <div className="phancon7">
            <img
              src="http://st.cdjapan.co.jp/pictures/l/14/35/NEOBK-2173350.jpg"
              className="images7"
              alt="images7"
            ></img>
            <a
              href="https://jojo.fandom.com/wiki/Steel_Ball_Run"
              className="a7"
            >
              <p className="p7">JoJo phần 7</p>
            </a>
          </div>
          <div className="phancon8">
            <img
              src="https://i.pinimg.com/originals/28/5e/bd/285ebd327749cdbed68ea573db8210fe.jpg"
              className="images8"
              alt="images8"
            ></img>
            <a href="https://jojo.fandom.com/wiki/JoJolion" className="a8">
              <p className="p8">JoJo phần 8</p>
            </a>
          </div>
        </div>

        <img
          src="https://cdn.vinshine.com/img/60f7bf1d0bc99426cac2388fe1b6e416442e04059ba626d5cd2507f27a4dfc7788bec6631afb6a74ff77a52a1336179312e87ba794ac5cf5.jpg?referer=60f7bf1d0bc994266d573f4b63d84278f6930556344116c3"
          className="id0"
          alt="images"
        ></img>
        <div className="id1">
          <p>Cảm ơn các bạn đã ghé thăm trang web của tôi!</p>
          <div className="id2">
            <a
              href="https://github.com/KietHo1/FirstProject"
              className="agithub"
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png"
                className="imagesgithub"
                alt="imagesgithub"
              ></img>
            </a>
            <a
              href="https://www.facebook.com/kiet.ho.161214/"
              className="afacebook"
            >
              <img
                src="https://dividedskyentertainment.com/officialwebsite/wp-content/uploads/2021/01/FB_Y-2.png"
                className="imagesfacebook"
                alt="imagesfacebook"
              ></img>
            </a>
          </div>
          <div className="id3">
            <p className="end1">© 2022 KietHo1</p>
            <p className="end2">Design by KietHo1</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
