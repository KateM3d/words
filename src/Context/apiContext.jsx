import React, { useState, useEffect, createContext } from "react";

export const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  function updateData(value) {
    setWords([...words, { id: words.length + 1, english: value }]);
  }

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Oops!...");
        }
      })
      .then((data) => {
        setWords(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <APIContext.Provider
      value={{
        words,
        error,
        isLoading,
        updateData,
        setWords,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
