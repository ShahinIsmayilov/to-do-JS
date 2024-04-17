document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("tbody");
    let rowCount = 1;

    function addRow() {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td><input type="text" placeholder="Ad"></td>
            <td><input type="text" placeholder="Soyad"></td>
            <td><input type="number" placeholder="Yaş"></td>
            <td>
                <button>Saxla</button>
                <button>Sil</button>
            </td>
        `;
        rowCount++;
    }
    const addRowBtn = document.createElement("button");
    addRowBtn.textContent = "+";
    addRowBtn.addEventListener("click", addRow);
    document.getElementById("operationsHeader").appendChild(addRowBtn);

    addRow();

    tableBody.addEventListener("click", function(event) {
        const target = event.target;
        const row = target.closest("tr");

        if (target.textContent === "Sil") {
            row.remove();
        } else if (target.textContent === "Saxla") {
            row.querySelectorAll("input").forEach(input => {
                input.disabled = true;
            });
            target.textContent = "Redaktə et";
        }
    });
});
