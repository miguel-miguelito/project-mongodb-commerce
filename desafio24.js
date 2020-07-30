use commerce;

db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } }
);
