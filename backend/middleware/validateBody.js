const RequestObject = ["nom", "prenom", "email", "telephone", "adresse"];

function validateBody(req, res, next) {
  const data = req.body;

  if (!data) {
    res
      .status(400)
      .send({ message: "bad request , you shoud verify your request body" });
    return;
  }

  for (const key in data) {
    if (RequestObject.includes(key) && data[key] !== null) {
      res.status(400).send({ message: `your request does not include ${key}` });
      return;
    }
  }

  req.userData = data;

  next();
}

module.exports = { validateBody };
