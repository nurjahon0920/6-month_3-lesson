import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import sec1_bg from "./assets/sec1/sec1_bg.png";
import sec2_img from "./assets/sec2/sec2_img.png";
import sec3_img1 from "./assets/sec3/sec3_img1.png";
import sec3_img2 from "./assets/sec3/sec3_img2.png";
import sec3_img3 from "./assets/sec3/sec3_img3.png";
import sec3_img4 from "./assets/sec3/sec3_img4.png";
import sec3_img5 from "./assets/sec3/sec3_img5.png";
import sec4_img1 from "./assets/sec4/sec4_img1.png";
import sec4_img2 from "./assets/sec4/sec4_img2.png";
import sec4_img3 from "./assets/sec4/sec4_img3.png";
import sec4_img4 from "./assets/sec4/sec4_img4.png";
import sec4_img5 from "./assets/sec4/sec4_img5.png";
// import sec5_bg from "./assets/sec5/sec5_bg.png";
// import sec6_img1 from "./assets/sec6/sec6_img1.png";
// import sec6_img2 from "./assets/sec6/sec6_img2.png";
// import sec6_img3 from "./assets/sec6/sec6_img3.png";
// import sec6_img4 from "./assets/sec6/sec6_img4.png";
// import sec6_img5 from "./assets/sec6/sec6_img5.png";
// import sec7_img1 from "./assets/sec7/sec7_img1.png";
// import sec7_img2 from "./assets/sec7/sec7_img2.png";
// import sec7_img3 from "./assets/sec7/sec7_img3.png";
const App = () => {
  return (
    <>
      <main>
        <Header />
        <section className="sec1">
          <div className="container">
            <div className="sec1_text">
              <h3>LEANGROUP - тубы и этикетки</h3>
              <h2>Ламинатные тубы</h2>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <a href="#">Каталог</a>
            </div>
          </div>
        </section>
        <section className="sec2">
          <div className="container">
            <h2>
              О компании <span>LEANGROUP</span>
            </h2>
            <div className="sec2_bottom">
              <img src={sec2_img} alt="sec2_img" />
              <div className="sec2_bottom_text">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб.
                  <br />
                  <br />
                  Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции.
                  <br />
                  <br />С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec3">
          <div className="container">
            <h2>
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
            <div className="sertifikatlar">
              <img src={sec3_img1} alt="" />
              <img src={sec3_img2} alt="" />
              <img src={sec3_img3} alt="" />
              <img src={sec3_img4} alt="" />
              <img src={sec3_img5} alt="" />
            </div>
          </div>
        </section>
        <section className="sec4">
          <div className="container">
            <h2>
              Наша <span>продукция</span>
            </h2>
            <div className="buttons_group">
              <button>Ламинатные тубы</button>
              <button>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
            <div className="sec4_images">
              <img src={sec4_img1} alt="sec4_img1" />
              <img src={sec4_img2} alt="sec4_img2" />
              <img src={sec4_img3} alt="sec4_img3" />
              <img src={sec4_img4} alt="sec4_img4" />
              <img src={sec4_img5} alt="sec4_img5" />
            </div>
            <button className="sec4_bottom_btn">Перейти в каталог</button>
          </div>
        </section>
        <section className="sec5">
          <div className="container">
            <h2>
              Получить подробную <span>информацию</span>
            </h2>
            <p>
              Просто заполните форму, наш менеджер свяжется с вами в ближайшее
              время
            </p>
            ``
          </div>
        </section>
        <section className="sec6">
          <div className="container"></div>
        </section>
        <section className="sec7">
          <div className="container"></div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
