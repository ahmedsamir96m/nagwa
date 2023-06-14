const fetchWords = async (url, setWords) => {
  try {
    await fetch(`${url}words`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  } catch (error) {
    console.log(error);
  }
};

export { fetchWords };
