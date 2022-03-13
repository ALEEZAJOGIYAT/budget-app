
{
  /* <div className="app_wrapper">
<div>
  <h2>BUDGET CALCULATOR</h2>
  <div className="box">
    <div className="wrap">
      <div className="budget_wrapper">
        <label className="label_decoration">Charge</label>
      </div>
      <div className="budget_input_wrapper">
        <input
          name="budget"
          className="budget"
          placeholder="Budget"
          value={charge}
          onChange={(e) => handleCharge(e)}
        ></input>
      </div>
    </div>
    <div className="wrap_two">
      <div className="amount_wrapper">
        <label className="label">Amount</label>
      </div>
      <div className="amount_input_wrapper">
        <input
          name="amount"
          className="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        ></input>
      </div>
    </div>
    <div>
      <Button
        variant="contained"
        color="inherit"
        style={{ marginTop: "90px", marginLeft: "-200px" }}
        disbaleRipple
        onClick={(e) => handleSubmit(e)}
        endIcon={<MdSend></MdSend>}
      >
        SUBMIT
      </Button>
    </div>
  </div>

  {budgetInfo.map((items, index) => {
    return (
      <div key={items.id}>
        <ul className="list_items">
          <li className="list_item_budget">{items.charge}</li>
          <li className="list_item_amount">{items.amount}</li>
          <Button
            className="edit"
            onClick={(e) => handleEdit(e, index)}
            // endIcon={<MdEdit></MdEdit>}
          >
            <MdEdit></MdEdit>
          </Button>
          <Button onClick={() => handleDelete(index)}>
            <MdDelete></MdDelete>
          </Button>
          <Button
            endIcon={<MdDelete></MdDelete>}
            onClick={() => handleClear()}
          >
            Clear Expenses
          </Button>
        </ul>
      </div>
    );
  })}
</div>
</div> */
}


// const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [address, setAddress] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleChangeEmail = (e) => {
//     setEmail = e.target.value;
//   };
//   const handleChangeName = (e) => {
//     setName = e.target.value;
//   };
//   const handleChangePhoneNo = (e) => {
//     setPhoneNo = e.target.value;
//   };
//   const handleChangeAddress = (e) => {
//     setAddress = e.target.value;
//   };
