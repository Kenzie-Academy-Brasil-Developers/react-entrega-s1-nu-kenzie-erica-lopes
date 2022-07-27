import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "entrada", value: 2500 },
    // { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const [listFilters, setListFilters] = useState(listTransactions);

  function transactionAll() {
    setListFilters(listTransactions);
  }

  function transactionEntry() {
    const entry = listTransactions.filter((e) => e.type === "entrada");
    setListFilters(entry);
  }

  function transactionExpenses() {
    const expense = listTransactions.filter((e) => e.type === "saída");
    setListFilters(expense);
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <header>
            <div className="divHeader">
              <img src="./logo.svg" alt="logo-nu-kenzie" />
              <button className="btnLogin" onClick={handleLogin}>
                Sair
              </button>
            </div>
          </header>

          <main>
            <section className="sectionBase">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listFilters={listFilters} />
            </section>

            <section className="sectionCards">
              <div className="divList">
                <div className="divTitle">
                  <p className="pDivTitle">Resumo financeiro</p>
                  <div className="btnTitle">
                    <button
                      type="submit"
                      className="btnTodos btnList"
                      onClick={transactionAll}
                    >
                      Todos
                    </button>
                    <button
                      type="submit"
                      className="btnEntradas btnList"
                      onClick={transactionEntry}
                    >
                      Entradas
                    </button>
                    <button
                      type="submit"
                      className="btnDespesas btnList"
                      onClick={transactionExpenses}
                    >
                      Despesas
                    </button>
                  </div>
                </div>
              </div>
              <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
            </section>
          </main>
        </>
      ) : (
        <WelcomePage handleLogin={handleLogin} />
      )}
    </>
  );
}
export default App;
