use commerce;

db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Miguel" } }
);
