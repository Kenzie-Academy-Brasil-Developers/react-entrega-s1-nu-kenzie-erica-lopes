function Card({ listTransactions, setListTransactions }) {
  function handleRemoveData(listRemove) {
    const newList = listTransactions.filter((list) => list !== listRemove);
    setListTransactions(newList);
  }

  return (
    <>
      {listTransactions.map((transaction, index) => {
        return transaction.visibility === true ? (
          <li
            className={
              transaction.type === "entrada" ? "card entry" : "card extends"
            }
            key={index}
          >
            <div className="divCardTitle">
              <p className="cardDescription">{transaction.description}</p>
              <div className="divCardValue">
                <p className="cardValue">RS {transaction.value}</p>
                <div className="btnRemove">
                  <button
                    type="button"
                    className="buttonRemove"
                    onClick={() => handleRemoveData(transaction)}
                  >
                    <img src="./trash.svg" alt="lixeira" />
                  </button>
                </div>
              </div>
            </div>
            <p className="cardType">{transaction.type}</p>
          </li>
        ) : (
          <></>
        );
      })}
    </>
  );
}
export default Card;
