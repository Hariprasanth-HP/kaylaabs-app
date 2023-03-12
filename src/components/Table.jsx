import React from "react";
import "./styles.css";
const Table = ({ filterDetails }) => {
  const truncate = (passage, n) => {
    const trimmed =
      passage.length > n
        ? passage.substring(0, Math.min(n, passage.length)) + ".."
        : passage;
    return trimmed;
  };
  return (
    <div class=" w-100 p-1 " style={{ height: "548px" }}>
      <table class="table table-hover table-bordered">
        <thead class="thead-dark h-25">
          <tr>
            <th scope="col">ID</th>
            <th class="text-left " scope="col">
              Name
            </th>
            <th class="text-left " scope="col">
              Tag Line
            </th>
            <th class="text-left " scope="col">
              SRM
            </th>
            <th class="text-left " scope="col">
              Target FG
            </th>
          </tr>
        </thead>
        <tbody>
          {filterDetails.map((detail) => {
            return (
              <tr class="m-0 p-0 h-25" key={detail.id}>
                <th scope="row">{detail.id}</th>
                <td class="text-left text-truncate">
                  {truncate(detail.name, 20)}
                </td>
                <td class="text-left text-truncate">
                  {truncate(detail.tagline, 30)}
                </td>
                <td>{detail.srm}</td>
                <td>{detail.target_fg}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
