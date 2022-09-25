import { db } from "../db/db.js";

export const getAllPaints = (req, res) => {
  const theQuery = "SELECT * FROM paints";
  db.query(theQuery, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const postPaint = (req, res) => {
  const theQuery = "INSERT INTO paints (`title`,`desc`,`image`) VALUES(?)";
  const values = [req.body.title, req.body.desc, req.body.image];

  db.query(theQuery, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("created successfully");
  });
};
