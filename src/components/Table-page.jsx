import React, { useEffect, useState } from "react";

const TablePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("https://api.punkapi.com/v2/beers");
      const jsonData = await getData.json();
      setData(jsonData);
    };
    fetchData();
  }, []);
  console.log("dataa", data);
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablePage;
