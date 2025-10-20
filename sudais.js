function generateTable() {
  let table = document.getElementById("table");
  let range = document.getElementById("range");
  let value1 = parseInt(table.value);
  let value2 = parseInt(range.value);
``
  if (isNaN(value1) || isNaN(value2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let html = `
    <html>
    <head>
      <title>Generated Table</title>
      <style>
        body {
          background-color: #fdf6e3;
          font-family: Arial, sans-serif;
          padding: 30px;
        }
        h2 {
          text-align: center;
          color: #b71c1c;
        }
        table {
          width: 80%;
          margin: 0 auto;
          border-collapse: collapse;
          background-color: #3541e5;
          color: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        th, td {
          border: 1px solid #ffffff;
          padding: 10px 15px;
          text-align: center;
        }
        th {
          background-color: #b71c1c;
        }
        tr:nth-child(even) {
          background-color: #3e4ae5;
        }
      </style>
    </head>
    <body>
      <h2>Table of ${value1}</h2>
      <table>
        <tr>
          <th>Expression</th>
          <th>Result</th>
        </tr>`;

  for (let i = 1; i <= value2; i++) {
    html += `
        <tr>
          <td>${value1} × ${i}</td>
          <td>${value1 * i}</td>
        </tr>`;
  }

  html += `
      </table>
    </body>
    </html>`;

  let win = window.open("", "TableWindow", "width=500,height=500");
  win.document.write(html);
  win.document.close();
}