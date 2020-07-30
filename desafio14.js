use commerce;

db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } }
);
