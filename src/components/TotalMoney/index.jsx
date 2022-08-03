function TotalMoney({ listTransactions }) {
  console.log(listTransactions)
  const result = listTransactions.reduce(
    (previousValue, currentValue) => previousValue + currentValue.value,
    0
  );

  return (
    <div className="divTotalMoney">
      <div className="divTotal">
        <p className="pTotal">Valor total:</p>

        <p className="valueTotal">R$ {result}</p>
      </div>
      <small className="smallTotalMoney">O valor se refere ao saldo</small>
    </div>
  );
}
export default TotalMoney;
