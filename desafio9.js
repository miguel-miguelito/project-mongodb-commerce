use commerce;

db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } }
);
