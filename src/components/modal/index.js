import React, { useState } from "react";


export const Modal = ({ item,id }) => {
  console.log("check--->", item);

  return (
    <div key={id}>
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

            <div className="show-grid modal-body">
              <div className="container">
                <div className="form-group">
                  <label className="labels form-label" for="title">
                    Amount:{item.amount}
                  </label>
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="gpa">
                    Charge:{item.charge}
                  </label>
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="gpa">
                    Total Spend
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
                  <button
                    type="button"
                    className="btn pdf"
                  >
                    Generate PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

