import { useEffect, useState } from "react";
import styles from './index.module.scss'

export default function Demo() {
  const [counter, setCounter] = useState<number>(0);
  const [age, setAge] = useState<number>(30);

  // useEfect - хук, который позволяет запускать эффекты
  // useEffect(() => {
  //   console.log("Use effect 1 ");
  //   // при первом рендере компонента
  // }, []);
  //  // при любом изменении - любой ререндер
 // unmounting - размонтирование компонента
 // mounting - монтирование компонента
 // updating - обновление компонента
 // useEffect - вызывается при монтировании и обновлении компонента
 // функция очистки в эффекте - вызывается при размонтировании компонента
 
  useEffect(() => {
    console.log("Use effect 2 без массива зависимостей");
    // при первом рендере компонента
    // при любом изменении - любой ререндер
  });

  useEffect(() => {
    console.log("Use effect 3 с указанием зависимостей");
    // при первом рендере компонента
  }, [age]);


  // side-effects - это эффекты, которые не относятся к React
  // side-effects могут быть вызваны во время выполнения кода, например, взаимодействие с API, 
  // взаимодействие с DOM, взаимодействие с localStorage, взаимодействие с временем, взаимодействие с сетью
  // useEffect - это хук в React, который позволяет запускать эффекты(side-effects)

  // принимает 2 параметра
  // 1й - функция, которая будет вызвана при изменении зависимостей
  // 2й - массив зависимостей
  // если массив зависимостей пустой, то эффект будет вызван только при первом рендере компонента
  // если массив зависимостей не пустой, то эффект будет вызван при первом рендере компонента 
  // и при изменении зависимостей
   
// функция очистки в эффекте
// useEffect(() => {
//   console.log("Use effect 4");
//   return () => {
//     console.log("Use effect 4 - очистка");
//   };
// }, [age]);
//   функция очистки в юзэффекте - сработает при размонтировании компонента
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Click");
    }, 6000);
// функция указанная в ретерне вызовется при размонтировании компонента
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Use Effect</h2>
      <p>Counter: {counter}</p>
      <p>Age: {age}</p>
      <button className={styles.button} type="button" onClick={() => setCounter((prev) => prev + 1)}>
        +1
      </button>
      <button className={styles.button} type="button" onClick={() => setAge((prev) => prev + 1)}>
        Age +1
      </button>
      <ul className={styles.list}>
        <li>Для фетчинга данных</li>
        <li>Для таймеров</li>
        <li>Для стастических данных - маркетинг или аналитика</li>
      </ul>
    </div>
  );
}