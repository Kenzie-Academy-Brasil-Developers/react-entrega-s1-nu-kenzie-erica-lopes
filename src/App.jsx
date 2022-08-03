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

  const [listTransactions, setListTransactions] = useState([]);

  function transactionAll() {
    const list = listTransactions.map((item) => {
      item.visibility = true;
      return item;
    });
    setListTransactions(list);
  }

  function transactionEntry() {
    const list = listTransactions.map((item) => {
      if (item.type === "entrada") {
        item.visibility = true;
        return item;
      } else {
        item.visibility = false;
        return item;
      }
    });
    setListTransactions(list);
  }

  function transactionExpenses() {
    const list = listTransactions.map((item) => {
      if (item.type === "saída") {
        item.visibility = true;
        return item;
      } else {
        item.visibility = false;
        return item;
      }
    });
    setListTransactions(list);
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
              <TotalMoney listTransactions={listTransactions} />
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
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
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
