const TextController = {
  reverseText(req, res) {
    console.log();
    if (Object.keys(req.query).length === 0) {
      return res.status(400).send({ message: "Debes mandar un texto." });
    } else if (Object.keys(req.query)[0] !== "text") {
      return res
        .status(400)
        .send({
          message:
            "Debes mandar un query llamado text para que funcione el endpoint.",
        });
    } else {
      const reversedStr = req.query.text.split("").reverse().join("");
      res.status(200).send({ text: reversedStr });
    }
  },
};

export default TextController;
