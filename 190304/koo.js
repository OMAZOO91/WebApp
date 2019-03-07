function input_score(){
    var name = document.myform.name;
    var korean_language = document.myform.korean_language;
    var english = document.myform.english;
    var math = document.myform.math;
    add_row(name, korean_language, english, math);
    document.myform.name.value = '';
    document.myform.korean_language.value = '';
    document.myform.english.value = '';
    document.myform.math.value = '';
    sortTable();
}

function add_row(name,
     korean_language, english, math){
    var my_tbody = document.getElementById('table');
    var row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = name.value;
    cell2.innerHTML = korean_language.value;
    cell3.innerHTML = english.value;
    cell4.innerHTML = math.value;
    cell5.innerHTML = Number(korean_language.value) + Number(english.value) + Number(math.value);
    cell6.innerHTML = ((Number(korean_language.value) + Number(english.value) + Number(math.value))/3.0).toFixed(2);

    my_tbody = document.getElementById('sortTable');
    row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);
    cell1.innerHTML = name.value;
    cell2.innerHTML = korean_language.value;
    cell3.innerHTML = english.value;
    cell4.innerHTML = math.value;
    cell5.innerHTML = Number(korean_language.value) + Number(english.value) + Number(math.value);
    cell6.innerHTML = ((Number(korean_language.value) + Number(english.value) + Number(math.value))/3.0).toFixed(2);

}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("sortTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[4];
            y = rows[i + 1].getElementsByTagName("td")[4];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function tableDisplay(){
    if(document.sortScore.sort[0].checked){
        document.getElementById('table').style.display = 'table';
        document.getElementById('sortTable').style.display = 'none';
    }
    if(document.sortScore.sort[1].checked){
        document.getElementById('table').style.display = 'none';
        document.getElementById('sortTable').style.display = 'table';
    }
}

function searchStudent() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    if(document.sortScore.sort[0].checked){
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if(document.sortScore.sort[1].checked){
        table = document.getElementById("sortTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}
