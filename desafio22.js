use commerce;

db.produtos.count(
  { $text: { $search: "frango hamburguer" } }
);
