import './App.css';
import NestedGrid from './components/grid'

function App() {
    return (
      <div>
      <header className="header">

        <section className="flex">

          <a href="#home" className="logo"><img src={require("./images/logo.png")} alt=""/></a>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#gallery">gallery</a>
            <a href="#footer">contact</a>
          </nav>

        </section>

      </header>

  <div className="home-bg">

    <section className="home" id="home">

      <div className="content">
      </div>

    </section>

  </div>

  <section className="about" id="about">

    <div className="image">
      <img src={require("./images/about.jpg")} alt=""/>
    </div>

    <div className="content">
      <h3>26年老招牌《清坤园饮食中心》</h3>
      <p>近二十年纯手工自制经验，从面皮到内陷秉持传统手法制作，料好实在，味道地道。采用精选前腿肉，经由自家新鲜调制的内陷，加上细柔带Q劲的面皮。
        尤其以肉包最为吃香，深受客人喜爱，菜包亦广受好评。当肉馅乍现，香气四溢，保证回味无穷，一粒接一粒。品质保证，口碑相传</p>
        <br/>
      <p>With almost twenty years of experience of personally making the big dumplings right from the crust to the meat stuffing and the taste, the proprietor shows his skills as he selects the foreleg portion of the meat and adds the stuffing when the crust is ready. The fragrant meat as well as the vegetarian dumplings are strongly favoured by customers and has received good appraisal. When the meat stuffing is ready, the aroma rises to give a mouth- watering invitation to patrons to taste the dumplings. The quality of the product is sure to please.</p>
      <a href="#menu" className="btn">our menu</a>
    </div>

  </section>

  <section className="facility">

    <div className="heading">
        <h3>Operational Time</h3>
    </div>

    <div className="box-container">

      <div className="box">
        {NestedGrid()}
      </div>
    </div>

  </section>

  <section className="menu" id="menu">

    <div className="heading">
      <img  src={require("./images/heading-img.png")} alt=""/>
        <h3>档口美食</h3>
    </div>

    <div className="box-container">

      <div className="box">
        <img  src={require("./images/wantanmee.jpg")} alt=""/>
          <h3>云吞面 Wan Tan Mee</h3>
      </div>

      <div className="box">
        <img  src={require("./images/duckPorridge.jpg")} alt=""/>
          <h3>鸭饭/粥 Duck Rice/Porridge</h3>
      </div>

      <div className="box">
        <img  src={require("./images/charKeowTiao.jpg")} alt=""/>
          <h3>炒粿条 Fried Kueh Teow</h3>
      </div>

      <div className="box">
        <img  src={require("./images/rotiCanai.jpg")} alt=""/>
          <h3>印度煎饼 Roti Canai</h3>
      </div>

      <div className="box">
        <img  src={require("./images/chickenRice.jpg")} alt=""/>
          <h3>鸡饭 Chicken Rice</h3>
      </div>

      <div className="box">
        <img  src={require("./images/ecoFriedNoodles.jpg")} alt=""/>
          <h3>经济炒米粉 Economic Fried Bee Hoon</h3>
      </div>

      <div className="box">
        <img  src={require("./images/koayTeowSup.jpg")} alt=""/>
        <h3>粿条汤 Koay Teow Sup</h3>
      </div>

      <div className="box">
        <img  src={require("./images/ahQianXiaoChao.jpg")} alt=""/>
        <h3>阿权小炒-碟仔饭</h3>
      </div>

      <div className="box">
        <img  src={require("./images/tosai.jpg")} alt=""/>
        <h3>印度酸奶煎饼 Tosai</h3>
      </div>

      <div className="box">
        <img  src={require("./images/laksa.jpg")} alt=""/>
        <h3>叻沙 Laksa</h3>
      </div>

      <div className="box">
        <img  src={require("./images/gaodian.jpg")} alt=""/>
        <h3>糕点 Kueh</h3>
      </div>

      <div className="box">
        <img  src={require("./images/rotiBakarAndWater.jpg")} alt=""/>
        <h3>烤面包,半生熟蛋和饮料 Roti Bakar, Egg Half Boil and Drinks</h3>
      </div>

    </div>

  </section>

  <section className="gallery" id="gallery">

    <div className="heading">
      <img  src={require("./images/heading-img.png")} alt=""/>
        <h3>our gallery</h3>
    </div>

    <div className="box-container">
      <img  src={require("./images/gallery-1.webp")} alt=""/>
        <img  src={require("./images/gallery-2.webp")} alt=""/>
          <img  src={require("./images/gallery-3.webp")} alt=""/>
            <img  src={require("./images/gallery-4.webp")} alt=""/>
              <img  src={require("./images/gallery-5.webp")} alt=""/>
                <img  src={require("./images/gallery-6.webp")} alt=""/>
    </div>

  </section>

  <section className="footer" id="footer">

    <div className="box-container">

      <div className="box">
        <i className="fas fa-envelope"></i>
        <h3>Closing Day</h3>
        <p>每逢星期二休息一天</p>
        <p>Every Tuesday rest for one day</p>
      </div>

      <div className="box">
        <i className="fas fa-clock"></i>
        <h3>opening hours</h3>
        <p>06:00am to 05:00pm</p>
      </div>

      <div className="box">
        <i className="fas fa-map-marker-alt"></i>
        <h3>shop location</h3>
        <p>2,Jalan Besar,Taman Tangling,14100 Simpang Ampat,Pulau Pinang.</p>
      </div>

      <div className="box">
        <i className="fas fa-phone"></i>
        <h3>our number</h3>
        <p>012-5578550</p>
      </div>

    </div>

    <div className="credit"> &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!</div>

  </section>
</div>
  );
}

export default App;
