var item = []

function print_grade(){


    var node = document.createElement("DIV");

    var name = document.getElementById("name").value;
    var korea = parseInt(document.getElementById("korea").value);
    var english = parseInt(document.getElementById("english").value);
    var math = parseInt(document.getElementById("math").value);
    var total = parseInt(korea + english + math);

    var avg = total/3;
    var data = name +"    " +korea + "    " + english + "    " + math+ "    " + total + "    " + avg;
    var textnode = document.createTextNode(data);


    item.push({name:name,korea:korea,english:english,math:math,total:total,avg:avg});
    node.appendChild(textnode);

    document.getElementById('print_field').appendChild(node);

}

function print_input(){
    var cc = item;
    document.getElementById('print_field').innerHTML="";
    var node2 = document.createElement("DIV2");

    for (var i = 0; i < item.length; i++) {
        var textnode2 = document.createTextNode(item[i]['name']+"    " + item[i]['korea']+"    " +item[i]['english']+"    " +item[i]['math']+"    " +item[i]['total']+"    " +item[i]['avg']);
        node2.appendChild(textnode2);
        document.getElementById('print_field').appendChild(textnode2);
        // document.getElementById('print_field').append(item[i]['name']+"    " + item[i]['korea']+"    " +item[i]['english']+"    " +item[i]['math']+"    " +item[i]['total']+"    " +item[i]['avg']);

    }


    cc = [];
}


function print_avg(){
    document.getElementById('print_field').innerHTML="";
    item.sort(function(a,b){
        return b.total - a.total;
    });
    for(var i=0; i<item.length; i++){
    document.getElementById('print_field').append(item[i]['name']+"    " + item[i]['korea']+"    " +item[i]['english']+"    " +item[i]['math']+"    " +item[i]['total']+"    " +item[i]['avg']);
    }
}

function search_name()
{
    var flag =0;

    var find_name = document.getElementById("find_name").value;
    for(var i=0; i<item.length; i++){
            if(find_name == item[i]['name'])
            {
                document.getElementById('print_search').innerHTML = item[i]['name']+"    " + item[i]['korea']+"    " +item[i]['english']+"    " +item[i]['math']+"    " +item[i]['total']+"    " +item[i]['avg'];
                flag = 1;
            }
        }
    if(flag==0)
        alert("없어요!");
}
