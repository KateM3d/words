import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

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
          console.log("error");
          setError(true);
          setIsLoading(false);
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

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
