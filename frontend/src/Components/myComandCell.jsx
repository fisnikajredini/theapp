import * as React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { render } from "react-dom";

export const MyCommandCell = (props) => {
  const { dataItem } = props;
  // refreshpage = () => {
  //   window.location.reload(false);
  // };
  // const inEdit = dataItem[props.editField];
  // const isNewItem = dataItem.ProductID === undefined;
  // deleteCompany = () => {
  //   Swal.fire({
  //     title:
  //       "Дали сакате да ја бришете фирмата: " +
  //       this.state.CompanyDelName +
  //       " ?",
  //     showDenyButton: true,
  //     confirmButtonText: `ДА`,
  //     denyButtonText: `НЕ`,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios.post("/deletecomp", { delfirma: this.state.CompanyDel }).then(
  //         axios.get("/getcompany").then((response) => {
  //           this.setState({ companyNames: response.data.data });
  //         })
  //       );
  //       Swal.fire("Фирмата е избршана!", "", "success").then();
  //     } else if (result.isDenied) {
  //       Swal.fire("Фирмата не е избришана!", "", "error");
  //     }
  //   });
  // };

  // inEdit ? (
  //   <td className="k-command-cell">
  //     <button
  //       className="k-button k-grid-save-command"
  //       onClick={() =>
  //         isNewItem ? props.add(dataItem) : props.update(dataItem)
  //       }
  //     >
  //       {isNewItem ? "Add" : "Update"}
  //     </button>
  //     <button
  //       className="k-button k-grid-cancel-command"
  //       onClick={() =>
  //         isNewItem ? props.discard(dataItem) : props.cancel(dataItem)
  //       }
  //     >
  //       {isNewItem ? "Discard" : "Cancel"}
  //     </button>
  //   </td>
  // ) :
  return (
    <td className="k-command-cell">
      {/* <button
        className="k-primary k-button k-grid-edit-command"
        onClick={() => props.edit(dataItem)}
      >
        Edit
      </button> */}
      <button
        className="k-primary k-button k-grid-remove-command"
        onClick={
          // deleteCompany()
          () => {
            // //   confirm("Confirm deleting: " + dataItem.ProductName) &&
            // //   props.remove(dataItem)4
            console.log(dataItem._id);
            {
              Swal.fire({
                title: "Дали сакате да ја бришете деловодникот ?",
                showDenyButton: true,
                confirmButtonText: `ДА`,
                denyButtonText: `НЕ`,
              }).then((result) => {
                if (result.isConfirmed) {
                  axios.post("/deletecategory", {
                    delfirma: dataItem._id,
                  });

                  Swal.fire("Деловодникот е избршан!", "", "success", {
                    timer: 1500,
                  }).then();
                  window.location.reload();
                } else if (result.isDenied) {
                  Swal.fire("Деловодникот не е избришан!", "", "error");
                }
              });
            }
          }
        }
      >
        Бриши
      </button>
    </td>
  );
};
