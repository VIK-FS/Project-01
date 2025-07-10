import { useEffect, useState } from "react";

export const AgePredictor = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const [nameErrorMsg, setNameErrorMsg] = useState<string>("");

  // Функция валидации имени
  function validate(name: string): boolean {
    if (name.length < 3) {
      setNameErrorMsg("Name must be at least 3 characters long");
      return false;
    }
    setNameErrorMsg("");
    return true;
  }

  // Функция для получения возраста
  async function fetchAge(nameToFetch: string) {
    try {
      const response = await fetch(`https://api.agify.io/?name=${nameToFetch}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const obj = await response.json();
      setAge(obj.age !== null ? obj.age : null); // Устанавливаем null, если возраст не определён
    } catch (error) {
      console.error("Error fetching age:", error);
      setNameErrorMsg("Failed to fetch age. Please try again.");
      setAge(null);
    }
  }

  // Выполняем запрос только при валидном имени
  useEffect(() => {
    if (validate(name)) {
      fetchAge(name);
    } else {
      setAge(null); // Сбрасываем возраст, если имя невалидно
    }
  }, [name]);

  return (
    <section>
      <h2>Age Predictor</h2>
      <input
        type="text"
        placeholder="Enter your name (at least 3 characters)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameErrorMsg && <div style={{ color: "red" }}>{nameErrorMsg}</div>}
      {age !== null && name && (
        <div>Estimated age for {name} is {age}</div>
      )}
    </section>
  );
};