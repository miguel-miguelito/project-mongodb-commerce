use commerce;

db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } }
);
