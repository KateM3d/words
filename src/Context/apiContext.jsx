import React, { useContext, useState, useEffect, createContext } from "react";

export const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const updateData = (value) => {
    setWords([...words, { id: words.length + 1, english: value }]);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    function fetchData() {
      setIsLoading(true);
      setError(false);
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => response.json())
        .then((data) => {
          setWords(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(true);
          setIsLoading(false);
          throw new Error("Oops! ...");
        });
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        words,
        error,
        isLoading,
        updateData,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
