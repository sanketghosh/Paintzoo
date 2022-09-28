import { db } from "../db/db.js";

export const getAllPaints = (req, res) => {
  const theQuery = "SELECT * FROM paints";
  db.query(theQuery, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const postPaint = (req, res) => {
  const theQuery =
    "INSERT INTO paints (`title`,`desc`,`price`,`image`) VALUES(?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.image,
  ];

  db.query(theQuery, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("created successfully");
  });
};

export const deletePaint = (req, res) => {
  const paintId = req.params.id;
  const theQuery = "DELETE FROM paints WHERE id = ?";

  db.query(theQuery, [paintId], (err, data) => {
    if (err) return res.json(err);
    return res.json("deleted successfully");
  });
};

export const updatePaint = (req, res) => {
  const paintId = req.params.id;
  const theQuery =
    "UPDATE paints SET `title`= ?, `desc`= ?, `price`= ?, `image`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.image,
  ];

  db.query(theQuery, [...values, paintId], (err, data) => {
    if (err) return res.json(err);
    return res.json("updated successfully");
  });
};
