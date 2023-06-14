const sendAnswers = async (data = {}, url, setRank) => {
  const response = await fetch(`${url}ranks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      setRank(data);
    });

  return response;
};

export { sendAnswers };
