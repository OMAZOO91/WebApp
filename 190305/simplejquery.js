$(document).ready(function(){
    $("td").not(function(index){
        return index%3==0;
    }).css("background", "red");
    // $("td").filter(function(index){
    //     return index%3==0;
    // }).css("background", "red");
    // $("td:first").css("background","red");
    // $("td:first-child").css("background","red");
    // $("td:last-child").css("background","yellow");
    // $("li").css("margin","5px");
    // $(":checked,:selected").css("border","2px solid red");
    // $(":selected").css("background","red");
    // $("#txt:focus").css("background", "red");
    // $("tr:not(.no)").css("background", "#AAA");
    // $("tr:even").css("background", "#AAA");

    //eq :(index):index 해당하는 요소
    //gt: 해당보다 높은 요소
    // lt:해당보다 낮은요소
    // $("tr:eq(0)> td:eq(7)").css("background","#EEE");
    // $("tr:eq(1)> td:gt(2)").css("background","#EEE");
    // $("tr:eq(2)> td:odd").css("background","#EEE");
    // $("tr:eq(3)> td:first").css("background","#AAA");
    // $("tr:eq(3)> td:last").css("background","#BBB");



    // >는 parent/child
    // 공백 1칸은  (ancestor==ascendant), descendant
    // +는 형제관계
    // ~는 앞에 제외하고 적용.(형제관계)
    // $("ul.url>li").css("border", "1px solid #ff0000");
    // $(".url2 li").css("border","1px solid blue");
    // $("label + input").css("border","1px solid #ff0000");
    // $("#info ~ input").css("background", "blue");
    // $(".callout").css("border", "solid 1px #ff0080");
    // $(".code").css("background", "#ccc");
    // $(".code").css("margin", "1px 2px");
    // $(".code").css("padding", "1px 4px");
    // $(".code").css("font-family", "monospace");
    // $(".highlight").css("background", "#ff0");
    // $(".highlight").css("font-style", "italic");

    // $("div > a[target]").css("background", "#ccc");
    // $("div > a[href!='http://www.daum.net']").css("background", "#ff0080");
    //[$=xx] 는 xx로 끝나면 적용대상.
    //[^=xx]는 xx로 시작하면 적용대상.
    //[*=xx]는 xx를 포함하면 적용대상.
    //[~=] 공백을 포함해서 같으면 적용대상.

    // $("div[id*='o']").css("font-style", "italic");

});
