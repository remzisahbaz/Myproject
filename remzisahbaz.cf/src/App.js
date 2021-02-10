import brand from './Resimler/terminal-fill.svg';
import resim1 from './Resimler/1.jpg';
import resim2 from './Resimler/2.jpg';
import resim3 from './Resimler/3.jpg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">

    <nav className="navbar navbar-expand-md navbar-light bg-light">
     <div className="container-fluid">
     <img src={brand} className=" me-2 " alt="" width="40 " height="40"></img>
     <i class="bi-alarm"></i>
     <a className="navbar-brand fw-bold" width="40 " height="40" href="#/">Remzi ŞAHBAZ</a>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item m-1">
   
      <a className="nav-link active  badge rounded-pill bg-primary text-white " 
      aria-current="page"
       href="#/"
       >
      <span class="h6">
      Anasayfa
      </span>
      </a>

        </li>
        <li className="nav-item m-1">
          <a className="nav-link active  badge rounded-pill bg-success text-white h1" href="#/">

          <span class="h6">
        Makaleler
      </span>
      </a>
    
        </li>
      
        <li className="nav-item m-1">
       
          <a className="nav-link active badge rounded-pill bg-secondary text-white" href="#/">
          <span class="h6 ">
        Haberler
      </span>
      </a>
        </li> 
  
      </ul>

      <form className="d-flex">
        <input className="form-control rounded-pill me-2" type="search" placeholder="...bir şeyler ara" aria-label="Search"/>
        <button className="btn btn-outline-success rounded-pill" type="submit">Ara</button>
      </form>
    </div>
  </div>
</nav>
    

  

{/* // ****************makale ve haber slide */}


<div className="container p-0 mt-3">
  <div class="row row-cols-1 row-cols-md-2 g-4">
 
  <div class="col">
  <div class="card border-grey">

  <div id="carouselExampleDark2" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <ol class="mb-0 carousel-indicators">
    <li data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleDark2" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark2" data-bs-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
    <div class="card border-grey">
      <img src={resim3} class="img-fluid card-img-top rounded-3" alt="..."/>
      <div class="card-body">

        <div className="card-img-overlay ">
        <h5 class="card-title text-white " >
        Makale 1
        </h5>
        <div class="card-title  m-0 p-0">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
        </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
        <form href="#/">
        <button  type="submit" class="btn badge rounded-2 bg-warning">
        <a class="btn badge rounded-2 bg-warning" href="#/">Devamı...</a></button></form>
        </p>
      </div>
     
    </div>
    </div>

    <div class="carousel-item" data-bs-interval="3000">
    <div class="card border-grey">
      <img src={resim2} class="img-fluid card-img-top rounded-3" alt="..."/>
      <div class="card-body">

        <div className="card-img-overlay ">
        <h5 class="card-title text-white " >
        Makale 2
        </h5>
        <div class="card-title  m-0 p-0">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
        </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
        <button type="button" class="btn badge rounded-2 bg-warning">Devamı...</button>
        </p>
      </div>
     
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="7000">
    {/* ****************************** */}
    <div class="card border-grey">
      <img src={resim1} class="img-fluid card-img-top rounded-3" alt="..."/>
      <div class="card-body">

        <div className="card-img-overlay ">
        <h5 class="card-title text-white " >
        Makale 3
        </h5>
        <div class="card-title  m-0 p-0">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
        </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
        <button type="submit" class="btn badge rounded-2 bg-warning">Devamı...</button>
        </p>
      </div>
     
    </div>
   
      
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleDark2" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleDark2" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
    
    </div>
  </div>
  


{/* ************************* */}
  <div class="col">
  <div class="card border-grey">

  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <ol class="mb-0 carousel-indicators">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
    <div class="card border-grey">
      <img src={resim1} class="img-fluid card-img-top rounded-3" alt="..."/>
      <div class="card-body">

        <div className="card-img-overlay ">
        <h5 class="card-title text-white " >
        Haber 1
        </h5>
        <div class="card-title  m-0 p-0">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
        </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
        <button type="button" class="btn badge rounded-2 bg-warning">Devamı...</button>
        </p>
      </div>
     
    </div>
    </div>

    <div class="carousel-item" data-bs-interval="5000">
    <div class="card border-grey">
      <img src={resim2} class="img-fluid card-img-top rounded-3" alt="..."/>
      <div class="card-body">

        <div className="card-img-overlay ">
        <h5 class="card-title text-white " >
        Haber 2
        </h5>
        <div class="card-title  m-0 p-0">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
        </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
        <button type="submit" class="btn badge rounded-2 bg-warning">Devamı...</button>
        </p>
      </div>
     
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
    {/* ****************************** */}
    <div class="card border-grey">
      <img src={resim3} class="img-fluid card-img-top rounded-3" alt="..."/>
      <div class="card-body">

        <div className="card-img-overlay ">
        <h5 class="card-title text-white " >
        Haber 3
        </h5>
        <div class="card-title  m-0 p-0">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
        </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
        <button type="button" class="btn badge rounded-2 bg-warning">Devamı...</button>
        </p>
      </div>
     
    </div>
   
      
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
    
    </div>
  </div>
  


{/* ****************** */}
</div>


</div>

<div className="container orta">
  <div className="row orta">
  <div className="col"></div></div>


  </div>


{/* ***footer */}

<div className="footer">

    <div className="footer-content">
    <div className="footer-section about"></div>
    <div className="footer-section abolinkut"></div>
    <div className="footer-section contact-form"></div>
    </div>

    <div className="footer-bottom">

    <div className="row p-100">
    <div className="col p-50">
    &copy; remzisahbaz.cf | Designed By Remzi ŞAHBAZ
    Change transition duration
The transition duration of .carousel-item can be changed with the $carousel-transition Sass variable before compiling or custom styles if you’re using the compiled CSS. If multiple transitions are applied
 </div>
 <div className="col">
    &copy; remzisahbaz.cf | Designed By Remzi ŞAHBAZ
    Change transition duration
The transition duration of .carousel-item can be changed with the $carousel-transition Sass variable before compiling or custom styles if you’re using the compile
 </div>
 <div className="col">
    &copy; remzisahbaz.cf | Designed By Remzi ŞAHBAZ
    Change transition duration
The transition duration of 
 </div>

</div>

    </div>

</div>
</div>
  );
}

export default App;
