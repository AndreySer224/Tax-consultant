import React from "react";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import OrderServiceButton from "./OrderServiceButton"; // Импортируем созданный компонент
import "./MainContent.css";
// import OrderServiceButton from './OrderServiceButton';

const ServiceItem = ({ text }) => (
  <p>
    <CheckIcon className="check-icon" />
    {text}
  </p>
);

const MainContent = () => {
  return (
    <main>
      {
        <div className="container-reviews" id="section1">
          <div className="our-сompany_img"></div>
          <div className="our-company_text">
            <h5>НАША КОМПАНИЯ</h5>
            <h1>Налоговый консультант</h1>
            <h4>
              Оптимизируем до 30% Ваших налогов при первичном обращении,
              приведём в порядок отчетность и покажем слабые места при проверках
              ИФНС
            </h4>
          </div>

          <div className="container">
            <div className="about-company" id="about">
              <div className="about-company_text">
                <h1>О нашей компании</h1>
                <p>
                  Мы специализируемся на предоставлении налоговых консультаций и
                  аудиторских услуг для бизнеса и индивидуальных
                  предпринимателей. Мы гордимся тем, что помогаем клиентам
                  оптимизировать налоговые обязательства и обеспечивать их
                  финансовую безопасность. Вдохновляемся стремлением к
                  профессионализму, прозрачности и индивидуальному подходу к
                  каждому клиенту. Наша команда ценит честность, ответственность
                  и постоянное развитие, что позволяет нам находить лучшие
                  решения в любой ситуации.
                </p>
              </div>
              <div className="about-company_photo">
                <img src="photo1.jpg" alt="Фото 1" />
                <img src="photo2.jpg" alt="Фото 2" />
                <img src="photo3.jpg" alt="Фото 3" />
                <img src="photo4.jpg" alt="Фото 4" />
              </div>
            </div>
          </div>

          <div className="services" id="services">
            <h1>Мы оказываем</h1>

            <div className="service-name">
              <img className="icons" src="taxes.png" alt="" />
              <h3>Налоговые услуги</h3>
            </div>

            <ServiceItem text="Сопровождение камеральных, выездных налоговых проверок" />
            <ServiceItem text="Оптимизируем налоговую нагрузку" />
            <ServiceItem text="Управление налоговыми рисками" />
            <ServiceItem text="Обжалуем решения налоговых органов, незаконные действия/бездействия должностных лиц налоговых органов" />
            <ServiceItem text="Подготовим апелляционную и/или кассационную жалобу" />
            <ServiceItem text="Подготовим жалобу на незаконные действия/бездействия должностных лиц налоговых органов" />

            <div className="service-name">
              <img className="icons" src="accounting.png" alt="" />
              <h3>Бухгалтерские услуги</h3>
            </div>

            <ServiceItem text="Полное ведение бухгалтерского учета (ведение бухгалтерского учета под ключ)" />
            <ServiceItem text="Декларации в том числе справки 3-НДФЛ" />
            <ServiceItem text="Справки БК" />

            <div className="service-name">
              <img className="icons" src="enterprise.png" alt="" />
              <h3 style={{ textAlign: "center" }}>
                Услуги по регистрации и ликвидации
              </h3>
            </div>
            <h3 style={{ textAlign: "center", marginTop: "-40px" }}>
              предприятий
            </h3>

            <p>
              <b>Регистрация ООО/ИП</b>
            </p>
            <ServiceItem text="Подготовим документы для регистрации ООО, ИП" />
            <ServiceItem text="Подберем оптимальную систему налогообложения, коды ОКВЭД" />
            <ServiceItem text="Для ИП и ООО с одним учредителем оформим полный пакет документов и отправим в налоговый орган + откроем расчетный счет в банке дистанционно" />

            <p>
              <b>Внесение изменений в учредительные документы</b>
            </p>
            <ServiceItem text="Ввод новых участников, вывод участников, смена юридического адреса, изменение вида деятельности, смена директора и т.д." />

            <p>
              <b>Закрытие ООО/ИП</b>
            </p>
            <ServiceItem text="Подготовим документы для прекращения деятельности ООО, ИП без долгов" />
          </div>

          <div className="relative-element">
            <div className="bg-image"></div>
            <div className="absolute-element">
              <h1>Доверьте налоги профессионалу –</h1>
              <h1>оптимизируйте свои финансы и достигайте</h1>
              <h1>новых высот!</h1>
              <div className="curved-arrow" src="curved-arrow.png" alt="" />
              <div>
                <OrderServiceButton />
                {/* <button type="button" className="button">
                  Заказать услугу
                </button> */}
              </div>
            </div>
          </div>

          <div className="advantages">
            <h1>Преимущества компании</h1>
            <h3>
              Мы упорно работаем каждый день, чтобы сделать <br /> жизнь наших
              клиентов лучше и счастливее
            </h3>
            <p>
              <img className="icons2" src="checked.png" alt="" /> 20 лет
              безупречного опыта
            </p>
            <p>
              <img className="icons2" src="checked.png" alt="" />
              Бухгалтерия, отдел кадров и налоговый аудитор в одном месте
            </p>
            <p>
              <img className="icons2" src="checked.png" alt="" />
              Декларации 3-НДФЛ при Вас за 15 минут
            </p>
          </div>

          <div className="reviews-сlients">
            <h1>Отзывы наших клиентов</h1>
            <section className="reviews">
              <div className="review">
                <img src="client-1.jpg" alt="Customer 1" />
                <p>
                  Справка НДФЛ за 15 минут. По предварительной записи. Во время
                  ожидания угостили кофе. Быстро. Спасибо большое.
                </p>
                <h3>
                  <b>Тамара Л.</b>
                </h3>
              </div>
              <div className="review">
                <img src="client2.jpg" alt="Customer 2" />
                <p>
                  Отличное обслуживание! Помогли сэкономить на налогах и
                  упростили всю бухгалтерию. Рекомендую!
                </p>
                <h3>
                  <b>Ольга П.</b>
                </h3>
              </div>
              <div className="review">
                <img src="client3.jpg" alt="Customer 3" />
                <p>
                  Дважды обращался в эту компанию. Помогли вернуть часть денег,
                  потраченных на лечение зубов, а так же НДФЛ - 3. Спасибо
                </p>
                <h3>
                  <b>Сергей С.</b>
                </h3>
              </div>
              <div className="review">
                <img src="client4.jpg" alt="Customer 4" />
                <p>Прекрасный опыт, буду обращаться снова.</p>
                <h3>
                  <b>Мария К.</b>
                </h3>
              </div>
            </section>
          </div>

          <div className="feedback">
            <div className="feedback-img"></div>
            <div className="feedback-form">
              <h1>Запишитесь на консультацию</h1>
              <h4>
                <br />
                Укажите Ваши данные для заказа услуги или связи с Вами
              </h4>
              <br />
              <input type="name" name="Имя" id="" placeholder="Имя" />
              <input type="email" name="E-mail" id="" placeholder="Email" />
              <input type="text" name="Текст" id="" placeholder="Текст" />
              <button type="button" class="button">
                Отправить
              </button>
            </div>
          </div>

          <div className="contacts" id="contacts">
            <h6>НАШИ КОНТАКТЫ</h6>
            <h2>+7 953 500-28-21</h2>
            <h2>+7 921 142-72-80</h2>
            <h2>nalogconsul35@gmail.com</h2>
            <h4>г. Вологда, Советский проспект, 35, офис 4</h4>

            <div className="social-network">
              <p>Мы в социальных сетях:</p>
              <img className="contactsImg" src="vk.png" alt="vk" />
              <img className="contactsImg" src="telegram.png" alt="vk" />
              <img className="contactsImg" src="social.png" alt="vk" />
            </div>
          </div>
        </div>
      }
    </main>
  );
};

export default MainContent;