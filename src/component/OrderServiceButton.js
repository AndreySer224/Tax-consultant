import React, { useState } from "react";
import "./Modal.css"; 

const OrderServiceButton = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для модального окна
  const [isFormSubmitted, setFormSubmitted] = useState(false); // Состояние для отслеживания отправки формы

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setFormSubmitted(false); // Сбрасываем состояние отправки при закрытии/открытии модального окна
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Отключаем стандартное поведение отправки формы
    setFormSubmitted(true); // Устанавливаем состояние отправки формы
  };

  return (
    <div>
      {/* Кнопка для открытия модального окна */}
      <button className="button" onClick={toggleModal}>
        Заказать услугу
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Форма заказа услуги</h2>

            {/* Если форма отправлена, отображаем сообщение */}
            {isFormSubmitted ? (
              <p>Ваша заявка отправлена</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ваше имя" required />
                <input type="email" placeholder="Ваш email" required />
                <input type="text" placeholder="Сообщение" />
                <button type="submit" className="submit-button">
                  Отправить
                </button>
              </form>
            )} 

            {/* Кнопка для закрытия модального окна */}
            <button className="close-button" onClick={toggleModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderServiceButton;