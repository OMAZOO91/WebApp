console.log("===============================4번문제======================================");

//데이터
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

//합계점수 오름차순 정렬.
function compare_score(compare)
{
    var temp=[];
    for(j=0;j<compare.length;j++)
    {
        for(k=0;k<compare.length-1;k++)
        {
            if(compare[k] > compare[k+1])
            {
                //위치 변경
                temp = compare[k];
                compare[k]=compare[k+1];
                compare[k+1] = temp;
            }
        }
 }
 // console.log(compare);
return compare;
}

//출력
function print_line_up(line_up, student)
{
    grade_num = 10;
    for(var i = 0; i<line_up.length; i++)
    {

        for(var j=0; j<student.length; j++)
        {
            if(line_up[i]==student[j]['sum'])
            {
                student[j]['grade_num']=grade_num;
                grade_num--;

            }
        }
        j=0;
    }

    for( var k=0; k<student.length; k++)
    {
        console.log(student[k]['name'] +"\t"+ student[k]['kor'] + "\t"+ student[k]['eng'] +"\t"+  student[k]['math'] + "\t"+ student[k]['sum'] +"\t"+  student[k]['avg'] +"\t"+ student[k]['grade'] + "    \t" + student[k]['grade_num']);
    }
    console.log("==========================1등부터 출력=====================================");
    for(var num = 1; num<=student.length; num++)
    {
        for(var j = 0; j<student.length; j++)
        {
            if(num == student[j]['grade_num'])
            {
                console.log(student[j]['name'] +"\t"+ student[j]['kor'] + "\t"+ student[j]['eng'] +"\t"+  student[j]['math'] + "\t"+ student[j]['sum'] +"\t"+  student[j]['avg'] +"\t"+ student[j]['grade'] + "    \t" + student[j]['grade_num']);
            }
        }
    }

}

//Sum, Avg, Grade 입력.
function print_student()
{
    var compare=[];
    for (var i=0; i<student.length; i++)
    {
        student[i]['sum'] = student[i]['kor']+student[i]['eng']+student[i]['math'];
        student[i]['avg']= (student[i]['sum']/3);
        compare[i] = student[i]['sum']
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
    }

    line_up=compare_score(compare);
    print_line_up(line_up, student)
}


var avg = 0;
print_student();
