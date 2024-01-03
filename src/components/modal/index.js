import React from "react";


export const Modal = ({ item,id }) => {

  const calculateTotal = () => {
    let totalAmount = 0;
    item.forEach((items) => {
      totalAmount += parseFloat(items.amount);
    });
    return totalAmount;
  };


  const totalAmount = calculateTotal();
  console.log(totalAmount, 'kjaskjdkasjndkjnsakjd');
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {
              item.map((items, index) => {
                return(
                  <div key={items.id}>
                  <div className="show-grid modal-body">
                    <div className="container" style={{display:"flex", flexDirection:'row'}}>
                      <div className="form-group" style={{marginLeft:'10px'}}>
                        <label className="labels form-label" for="gpa">
                         <h6> {items.charge} -- </h6>
                        </label>
                      </div>
                      <br/>
                      <div className="form-group">
                        <label className="labels form-label" for="title">
                          <h6>{items.amount} </h6>                          
                        </label>
                      </div>
                    </div>
                  </div>

                  </div>
                )

              })
            }
              <div className="form-group" style={{marginLeft:'60px'}}>
                <label className="labels form-label" for="gpa">
                  Total Spend: {totalAmount}
                </label>
              </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

