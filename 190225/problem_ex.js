//1. 1~10000사이의 3의 배수와 5의 배수 갯수를 출력하는 프로그램
console.log("===============================1번문제======================================");
var div_3 = 0, div_5 = 0;
var sum = 0;
for(i = 1; i<=10000; i++)
{
    if(i%3 ==0)
        div_3++;
    else if(i%5==0)
        div_5++;

}
sum = div_3 + div_5;
console.log(div_3);
console.log(div_5);
console.log(sum);
//2. 20개의 Data를 배열에 저장한 후 양수/음수, 양수일때 짝수/홀수 개수를 출력하는 프로그램.
console.log("===============================2번문제======================================");
var arr = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]
var pos_num =0;
var nag_num =0;
var ev_num=0, od_num=0;

for(i=0; i<arr.length; i++)
{
    if(arr[i]<0)
        nag_num++;
    if(arr[i]>0)
        pos_num++;
    if(arr[i]%2==0)
        ev_num++;
    if(arr[i]%2!=0)
        od_num++;
}

console.log(`The number of pos = ${pos_num} \t The number of nag = ${nag_num}`);
console.log(`\n The number of even = ${ev_num} \t The number of odd = ${od_num}`);


//3. 구구단을 출력하는 프로그램 (2단~ 9단)
/*

2단
2 x 1 = 2
...
*/
console.log("===============================3번문제======================================");
var result;
console.log("GUGUDAN");
for(i=2; i<10; i++)
{
    console.log("=========" + i + "단=========");
    for(j=1; j<10; j++)
    {
        result = i * j
        console.log(i + "x" + j + "=" +result);
    }
}


//4. 10명의 학생 성적을 출력하는 프로그램.
/*        1  2 3  sum  ava  P/F
    hong 50 50 50 150 50.0 fail
    kim 90 90 90 270 90 Excellent
    lee 70 70 70 210 70

    60< fail
    90>= Excellent
    else = normalhj



*/
console.log("===============================4번문제======================================");
console.log("name\tkor\teng\tmath\tsum\tavg\tgrade");
var student = [{name:'kim', kor:90, eng:90, math:90},
                {name:'hong', kor:70, eng:50, math:60},
                {name:'lee', kor:30, eng:30, math:30},
                {name:'cho', kor:100, eng:100, math:100},
                {name:'park', kor:80, eng:70, math:70},
                {name:'bae', kor:20, eng:50, math:60},
                {name:'han', kor:55, eng:45, math:33},
                {name:'yoon', kor:85, eng:87, math:72},
                {name:'woo', kor:75, eng:65, math:85},
                {name:'oog', kor:95, eng:62, math:100}
]

var avg = 0;
for (var i=0; i<student.length; i++)
{
    student[i]['sum'] = student[i]['kor']+student[i]['eng']+student[i]['math'];
    student[i]['avg']= (student[i]['sum']/3);
    //소수점 둘째 자리까지만 표시.
    student[i]['avg'] = student[i]['avg'].toFixed(2);

    if(student[i]['avg']>=90)
    {
        student[i]['grade'] = "Excellent";
    }
    else if(60<student[i]['avg'] && student[i]['avg']<90)
    {
        student[i]['grade'] = "Normal";
    }
    else {
        student[i]['grade'] = "Fail";
    }

    // console.log(student[i]);
    console.log(student[i]['name'] +"\t"+ student[i]['kor'] + "\t"+ student[i]['eng'] +"\t"+  student[i]['math'] + "\t"+ student[i]['sum'] +"\t"+  student[i]['avg'] +"\t"+ student[i]['grade']);
}
