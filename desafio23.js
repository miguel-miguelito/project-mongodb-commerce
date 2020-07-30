use commerce;

db.produtos.count(
  { $text: { $search: "'feito com'" } }
);
