use commerce;

db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $set: { valorUnitario: NumberDecimal("16.90") },
    $currentDate: { ultimaModificacao: true }
  }
);
