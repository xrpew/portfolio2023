import { useEffect, useState } from "react";

export const useBreakingBad = () => {
  const [brBadQ, setBrBadQ] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const changeQuote = () => {
    setIsLoading(true)
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => res.json())
      .then((data) => {
        setBrBadQ(data);
        setIsLoading(false)

      });
  };

  useEffect(() => {
    changeQuote();
  }, []);

  return { brBadQ, changeQuote, isLoading };
};
