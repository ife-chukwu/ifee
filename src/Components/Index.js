import { Link } from "react-router-dom";
import Info from "./Info";

function Index() {
  const FoodSec = Info.map((items) => {
    return (
      <div className=" food-sec" key={items.id}>
        <Link to="submain" className="food-link">
          <img src={`./Images/${items.img}`} alt="" className="food-img" />
          <h2 className="food-title">{items.description}</h2>
        </Link>
      </div>
    );
  });

  return (
    <div className="hero--section">
      <div>
        <img src="/Images/pizza2.png" alt="" className="sample" />
        <h1 className="sample--text">
          Where there's <br />
          <span className="sample-text-2"> Food Academy</span>
          <br /> there's enjoyment
        </h1>
      </div>{" "}
      <h1 className="FoodSample">Our food samples</h1>
      <section>
        {FoodSec}
        <Link to="subMain" className="food-link">
          <button className="btn-start">Buy Now</button>
        </Link>
      </section>
      <footer>
        <h2 className="footer-h">Food Academy</h2>
        <p className="footer-p">Copyright @ 2022food Academy.inc</p>
        <div className="footer-icon">
          <i class="fa-brands fa-facebook"></i>

          <i class="fa-brands fa-instagram"></i>

          <i class="fa-brands fa-twitter"></i>

          <i class="fa-brands fa-linkedin"></i>

          <i class="fa-brands fa-google"></i>
        </div>
        <ul className="footer-list">
          <Link to="#" className="footer-link">
            <li>Legal stuff</li>
          </Link>
          <Link to="#" className="footer-link">
            <li>security</li>
          </Link>
          <Link to="#" className="footer-link">
            <li>Privacy policy</li>
          </Link>
        </ul>
      </footer>
    </div>
  );
}
export default Index;
