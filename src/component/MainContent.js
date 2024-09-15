import React from "react";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import OrderServiceButton from "./OrderServiceButton"; // Импортируем созданный компонент
import "./MainContent.css";


const ServiceItem = ({ text }) => (
  <p>
    <CheckIcon className="check-icon" />
    {text}
  </p>
); 

const services = [
  { id: 1, text: "Сопровождение камеральных, выездных налоговых проверок" },
  { id: 2, text: "Оптимизируем налоговую нагрузку" },
  { id: 3, text: "Управление налоговыми рисками" },
  { id: 4, text: "Обжалуем решения налоговых органов, незаконные действия/бездействия должностных лиц налоговых органов"},
  { id: 5, text: "Подготовим апелляционную и/или кассационную жалобу"},
  { id: 6, text: "Подготовим жалобу на незаконные действия/бездействия должностных лиц налоговых органов"},  
  { id: 7, text:"Полное ведение бухгалтерского учета (ведение бухгалтерского учета под ключ)"},
  { id: 8, text:"Декларации в том числе справки 3-НДФЛ"},
  { id: 9, text:"Справки БК"},
  { id: 10, text:"Регистрация ООО/ИП"},
  { id: 11, text:"Внесение изменений в учредительные документы"},
  { id: 12, text:"Закрытие ООО/ИП"}
];

const MainContent = () => {
  const firstSix = services.slice(0, 6);
  const nextThree = services.slice(6, 9);
  const nextFour = services.slice(9, 10);
  const nextFive = services.slice(10, 11);
  const nextSix = services.slice(11, 12);

  return (
    <main>
      {
        <div className="container-reviews" id="section1">
          <div className="our-company_img"></div>
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
                <img src={process.env.PUBLIC_URL + "/images/photo1.jpg"} alt="Фото 1" />
                <img src={process.env.PUBLIC_URL + "/images/photo2.jpg"} alt="Фото 2" />
                <img src={process.env.PUBLIC_URL + "/images/photo3.jpg"} alt="Фото 3" />
                <img src={process.env.PUBLIC_URL + "/images/photo4.jpg"} alt="Фото 4" />
              </div>
            </div>
          </div>

          <div className="services" id="services">
            <h1>Мы оказываем</h1>
            <div className="service-name">
              <img className="icons" src={process.env.PUBLIC_URL + "/images/taxes.png"} alt="icon1" />
               <h3>Налоговые услуги</h3>
            </div>
            <div className="service-item">          
                  {firstSix.map(service => (
                  <ServiceItem key={service.id} text={service.text} />
            ))}
            </div>
            <div className="service-name">
            <img className="icons" src={process.env.PUBLIC_URL + "/images/accounting.png"} alt="icon2" />
              <h3>Бухгалтерские услуги</h3>
            </div>
            <div className="service-item">          
                  {nextThree.map(service => (
                  <ServiceItem key={service.id} text={service.text} />
            ))}
            </div>          

            <div className="service-name">
            <img className="icons" src={process.env.PUBLIC_URL + "/images/enterprise.png"} alt="icon3" />
              <h3 style={{ textAlign: "center" }}>
                Услуги по регистрации и ликвидации
              </h3>
            </div>
            <h3 style={{ textAlign: "center", marginTop: "-40px" }}>
              предприятий
            </h3>
            <div className="service-item">          
                  {nextFour.map(service => (
                 <ServiceItem key={service.id} text={service.text} />
                  ))}
            </div>
            
            <div className="registration-text">            
            <p>Подготовим документы для регистрации ООО, ИП </p>
            <p>Подберем оптимальную систему налогообложения, коды ОКВЭД </p>
            <p>Для ИП и ООО с одним учредителем оформим полный пакет документов и отправим в налоговый орган + откроем расчетный счет в банке дистанционно </p>
            </div>
            <div className="service-item">
                  {nextFive.map(service => (
                  <ServiceItem key={service.id} text={service.text} />
                  ))}
            </div>
            
            <div className="registration-text">         
            <p>Ввод новых участников, вывод участников, смена юридического адреса, изменение вида деятельности, смена директора и т.д.</p>
            </div>
            <div className="service-item">
                  {nextSix.map(service => (
                  <ServiceItem key={service.id} text={service.text} />
                  ))}</div>
              <div className="registration-text">         
            <p>Подготовим документы для прекращения деятельности ООО, ИП без долгов</p>
            </div>  
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
            <img className="icons2" src={process.env.PUBLIC_URL + "/images/checked.png"} alt="icon4" /> 
            20 лет безупречного опыта
            </p>
            <p>
              <img className="icons2" src={process.env.PUBLIC_URL + "/images/checked.png"} alt="icon4" />
              Бухгалтерия, отдел кадров и налоговый аудитор в одном месте
            </p>
            <p>
            <img className="icons2" src={process.env.PUBLIC_URL + "/images/checked.png"} alt="icon4" />
              Декларации 3-НДФЛ при Вас за 15 минут
            </p>
          </div>

          <div className="reviews-clients">
            <h1>Отзывы наших клиентов</h1>
            <section className="reviews">
              <div className="review">
              <img src={process.env.PUBLIC_URL + "/images/client-1.jpg"} alt="Customer 1" />         
                <p>
                  Справка НДФЛ за 15 минут. По предварительной записи. Во время
                  ожидания угостили кофе. Быстро. Спасибо большое.
                </p>
                <h3>
                  <b>Тамара Л.</b>
                </h3>
              </div>
              <div className="review">
              <img src={process.env.PUBLIC_URL + "/images/client2.jpg"} alt="Customer 2" />               
                <p>
                  Отличное обслуживание! Помогли сэкономить на налогах и
                  упростили всю бухгалтерию. Рекомендую!
                </p>
                <h3>
                  <b>Ольга П.</b>
                </h3>
              </div>
              <div className="review">
              <img src={process.env.PUBLIC_URL + "/images/client3.jpg"} alt="Customer 3" />           
                <p>
                  Дважды обращался в эту компанию. Помогли вернуть часть денег,
                  потраченных на лечение зубов, а так же НДФЛ - 3. Спасибо
                </p>
                <h3>
                  <b>Сергей С.</b>
                </h3>
              </div>
              <div className="review">
              <img src={process.env.PUBLIC_URL + "/images/client4.jpg"} alt="Customer 4" />            
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
              <button type="submit" className="button">
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
              <img className="contactsImg" src="../images/vk.png" alt="vk" />
              <img className="contactsImg" src="../images/telegram.png" alt="vk" />
              <img className="contactsImg" src="../images/social.png" alt="vk" />
            </div>
          </div>
        </div>
      }
    </main>
  );
};

export default MainContent;