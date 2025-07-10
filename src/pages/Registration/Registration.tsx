import React from 'react';

const Registration = () => {
  return (
    <div>
      <h2>Регистрация</h2>
      <form>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Email" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;