import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescriptionInput] = useState("");
  const [type, setSelectInput] = useState("entrada");
  const [value, setValueInput] = useState("");

  function handleData(event) {
    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      {
        description,
        type,
        value: type === "saída" ? parseInt("-" + value) : parseInt(value),
        visibility: true,
      },
    ]);
  }

  return (
    <>
      <form className="form" onSubmit={handleData}>
        <label>Descrição</label>
        <input
          className="inputDescription"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescriptionInput(event.target.value)}
        />
        <small className="smallForm">Ex: Compra de roupas</small>

        <div className="itensForm">
          <div className="valueForm">
            <label>Valor</label>
            <input
              className="inputValue"
              type="text"
              placeholder="R$"
              value={value}
              onChange={(event) => setValueInput(event.target.value)}
            />
          </div>
          <div className="typeValue">
            <label>Tipo de valor</label>

            <select
              name="select"
              id="typeValue"
              value={type}
              onChange={(event) => setSelectInput(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Despesa</option>
            </select>
          </div>
        </div>
        <button className="btnInsert" type="submit">
          Inserir valor
        </button>
      </form>
    </>
  );
}
export default Form;
