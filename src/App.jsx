import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import sec1_bg from "./assets/sec1/sec1_bg.png";
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
import sec5_bg from "./assets/sec5/sec5_bg.png";
import comment from "./assets/sec5/comment.png";
import input from "./assets/sec5/input.png";
import sec6_img1 from "./assets/sec6/sec6_img1.png";
import sec6_img2 from "./assets/sec6/sec6_img2.png";
import sec6_img3 from "./assets/sec6/sec6_img3.png";
import sec6_img4 from "./assets/sec6/sec6_img4.png";
import sec6_img5 from "./assets/sec6/sec6_img5.png";
import sec7_img1 from "./assets/sec7/sec7_img1.png";
import sec7_img2 from "./assets/sec7/sec7_img2.png";
import sec7_img3 from "./assets/sec7/sec7_img3.png";
const App = () => {
  return (
    <>
      <main>
        <div className="container">
          <Header />
          <section className="sec1" id="Ламинатные тубы">
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
            <img src={sec1_bg} alt="sec1_bg" />
          </section>
          <section className="sec2">
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
          </section>
          <section className="sec3" id="sertifikat">
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
          </section>
          <section className="sec4">
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
            <button className="sec_bottom_btn">Перейти в каталог</button>
          </section>
          <section className="sec5">
            <div className="sec5_text">
              <h2>
                Получить подробную <span>информацию</span>
              </h2>
              <p>
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>
              <div className="inputs">
                <img src={input} alt="" className="" />
                <img src={comment} alt="" className="two" />
              </div>
              <button id="submit">Получить информацию</button>
            </div>
            <img src={sec5_bg} alt="sec5_bg" className="sec5_bg" />
          </section>
          <section className="sec6">
            <h2>
              Наша <span>команда</span>
            </h2>
            <div className="cards">
              <div className="card">
                <img src={sec6_img1} alt="sec6_img1" />
                <h3>Войнич Дарья</h3>
                <p>Заместитель директора по продажам</p>
                <h4>+375 (17) 270-53-77 (317)</h4>
              </div>
              <div className="card">
                <img src={sec6_img2} alt="sec6_img2" />
                <h3>Мисько Екатерина</h3>
                <p>Начальник отдела сопровождения</p>
                <h4>+375 (17) 270-53-77 (115)</h4>
                <h4> +375 29 112-73-48</h4>
                <h4 className="leangroup_by">k.melnichenko@leangroup.by</h4>
              </div>
              <div className="card">
                <img src={sec6_img3} alt="sec6_img3" />
                <h3>Дмитроченко Дмитрий</h3>
                <p>Начальник отдела допечатной подготовки</p>
                <h4>+375 (17) 270-53-77 (333)</h4>
                <h4> +375 29 360-32-26</h4>
                <h4 className="leangroup_by">dmitrochenko@leangroup.by</h4>
              </div>
              <div className="card">
                <img src={sec6_img4} alt="sec6_img4" />
                <h3>Антух Евгений</h3>
                <p>Начальник отдела снабжения</p>
                <h4>+375 (17) 270-53-77 (148)</h4>
                <h4> +375 44 764-16-28</h4>
                <h4 className="leangroup_by">j.antuh@leangroup.by</h4>
              </div>
              <div className="card">
                <img src={sec6_img5} alt="sec6_img5" />
                <h3>Мисник Елена</h3>
                <p>Специалист по работе с клиентами</p>
                <h4>+375 (17) 270-53-77 (322)</h4>
                <h4> +375 29 329-34-03</h4>
                <h4 className="leangroup_by">e.misnik@leangroup.by</h4>
              </div>
            </div>
            <button className="sec_bottom_btn">Наша команда</button>
          </section>
          <section className="sec7">
            <h2>Новости</h2>
            <div className="cards">
              <div className="card katta_card">
                <img src={sec7_img1} alt="sec7_img1" />
                <p>28.01.2022</p>
                <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
              </div>
              <div className="card card2">
                <img src={sec7_img2} alt="sec7_img2" />
                <p>21.01.2022</p>
                <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
              </div>
              <div className="card kichik_card">
                <img src={sec7_img3} alt="sec7_img3" />
                <p>16.12.2021</p>
                <h3>Туба, как вид упаковки</h3>
              </div>
            </div>
            <button className="sec_bottom_btn">Все новости</button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
