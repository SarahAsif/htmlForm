function getData() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;

  document.getElementById("tbody").innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${city}</td>
            </tr>
  `;
  console.log(name + age + city);
}
