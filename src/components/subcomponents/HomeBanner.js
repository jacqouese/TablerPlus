import homeImg from '../../img/home.svg'
//this is the home banner displayed on home page
function HomeBanner() {
    return (
      <div className="home-banner">
        <div>
          <h1>Dzień dobry!</h1>
          <p>Wybierz jedną z opcji z menu bocznego</p>
        </div>
        <img id="home-img" src={homeImg}/>
      </div>
    );
  }
  
  export default HomeBanner;
  