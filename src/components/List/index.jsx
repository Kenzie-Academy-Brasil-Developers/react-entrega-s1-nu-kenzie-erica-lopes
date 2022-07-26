import Card from "../Card";

function List({ listTransactions, setListTransactions }) {
  return (
    <>
      <ul>
        {listTransactions.length === 0 ? (
          <div className="noTransaction">
            <h1>Você ainda não possui nenhum lançamento</h1>
            <img src="./NoCard.svg" alt="logo-nu-kenzie" className="imgNo" />
          </div>
        ) : (
          <Card
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        )}
      </ul>
    </>
  );
}
export default List;
