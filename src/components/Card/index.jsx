import "./style.css";

function Card({ listFilters, setListFilters }) {
  function handleRemoveData(listRemove) {
    const newList = listFilters.filter((list) => list !== listRemove);
    setListFilters(newList);
  }

  return (
    <>
      {listFilters.map((transaction, index) =>
        transaction.type === "entrada" ? (
          <li className="card entry" key={index}>
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
          <li className="card extends" key={index}>
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
        )
      )}
    </>
  );
}
export default Card;