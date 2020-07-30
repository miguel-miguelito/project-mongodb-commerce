use commerce;

db.produtos.updateMany(
  { valorUnitario: { $exists: 0 } },
  { $set: { valorUnitario: NumberDecimal("0.00") } }
);
