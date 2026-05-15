const week: string[] = ['월', '화', '수', '목', '금']
const timetable: string[][] = [
    ['음악', '개발', '프로', '음악', '음악'],
    ['영어', '개발', '사회', '진로', '영어'],
    ['수학', '사회', '수학', '체육', '음악'],
    ['사회', '음악', '정처', '국어', '개발'],
    ['과학', '프로', '영어', '수학', '창체'],
    ['정처', '프로', '과학', '국어', '창체'],
    ['정처', '',     '체육', '',     ''],
];
const st = ['1교시', '2교시', '3교시', '4교시', '5교시', '6교시', '7교시']
for(let i = 0; i < week.length; i++) {
    document.getElementById("weekList")!.innerHTML += "<td>"+week[i]+"</td>";
    for(let j = 0; j < st.length; j++) {
        document.getElementById(st[j])!.innerHTML += "<td>"+timetable[j][i]+"</td>";
    }
}
document.getElementById("form")!.addEventListener("submit", function(event) {
event.preventDefault();
const row = (document.getElementById('row') as HTMLInputElement).value;
const col = (document.getElementById('col') as HTMLInputElement).value;
const change = (document.getElementById('change') as HTMLInputElement).value;
if(change.length != 2){
    document.getElementById('message')!.innerText = "옳은 값을 넣어주세요";
    return 0;
}

timetable[Number(row)][Number(col)] = change;

});