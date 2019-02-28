//5개의 품목정보가 "tv" 5000, "vtr",25000, "camera",1500...

//keyboard, computer

let item = [{name:"tv",price:500000,sold:5},{name:"vtr",price:25000,sold:3},{name:"camera",price:150000,sold:2},{name:"computer",price:250000,sold:6},{name:"keyboard",price:50000,sold:4}];
function order_input(){
    let total_sell=0;
    console.log("<<판매현황표(입력순)>>");
    console.log("품목명    \t 단가 \t 판매수량 \t 판매금액");
    for(let i =0; i<item.length;i++)
    {
        item[i]['total'] = item[i]['price'] * item[i]['sold'];
        total_sell += item[i]['total'];
        console.log(item[i]['name'] +'      \t' + item[i]['price'] + '        \t' + item[i]['sold'] + '  \t' + item[i]['total'] );
    }
    console.log("\t\t\t총매출액: " + (total_sell));

}

function order_items(){
    let total_sell=0;
    console.log("<<판매현황표(품목순)>>");
    console.log("품목명\t\t 단가 \t 판매수량 \t 판매금액");
    item.sort((a,b)=> a.name > b.name);
    for(let i =0; i<item.length;i++)
    {
        total_sell += item[i]['total'];
        console.log(item[i]['name'] +'      \t' + item[i]['price'] + '        \t' + item[i]['sold'] + '  \t' + item[i]['total']);
    }
    console.log("\t\t\t총매출액: " + total_sell);
}

function order_total()
{
    let total_sell=0;
    console.log("<<판매현황표(판매금액순)>>");
    console.log("품목명 \t\t 단가 \t 판매수량 \t 판매금액");
    item.sort((a,b)=> a.total<b.total);
    for(let i =0; i<item.length;i++)
    {
        total_sell += item[i]['total'];
        console.log(item[i]['name'] +'      \t' + item[i]['price'] + '        \t' + item[i]['sold'] + '  \t' + item[i]['total']);

    }
    console.log("\t\t\t총매출액: " + total_sell);
}


order_input();
order_items();
order_total();
