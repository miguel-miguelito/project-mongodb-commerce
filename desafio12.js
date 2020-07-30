use commerce;

db.produtos.updateMany(
  {},
  { $set: { "vendasPorDia": [0, 0, 0, 0, 0, 0, 0] } }
);
