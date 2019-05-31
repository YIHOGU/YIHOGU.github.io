function selectEvent(element){
  var dep1 = ["국어국문학과","영어영문학과","일어일문학과","중국통상학과","역사학과","교육학과"];
  var dep2 = ["경제통상학과","행정학과","미디어커뮤니케이션학과"];
  var dep3 = ["경영학과"];
  var dep4 = ["호텔관광경영학부","글로벌조리학과"];
  var dep5 = ["수학통계학과","물리천문학과","화학과"];
  var dep6 = ["식품생명공학과","바이오융합공학과"];
  var dep7 = ["전자정보통신공학과"];
  var dep8 = ["컴퓨터공학과","소프트웨어학과","정보보호학과","데이터사이언스학과","지능기전공학과"];
  var dep9 = ["건축공학과","건설환경공학과","환경에너지공간융합학과","나노신소재공학과","원자력공학과","국방시스템공학과"];
  var dep10 = ["회화과","패션디자인학과","음악과","체육학과","무용과","영화예술학과"];
  var dep11 = ["법학과"];
  var target = document.getElementById('department');

  if(element.value == "인문과학대학") var d = dep1;
  else if(element.value == "사회과학대학") var d = dep2;
  else if(element.value == "경영대학") var d = dep3;
  else if(element.value == "호텔관광대학") var d = dep4;
  else if(element.value == "자연과학대학") var d = dep5;
  else if(element.value == "생명과학대학") var d = dep6;
  else if(element.value == "전자정보공학대학") var d = dep7;
  else if(element.value == "소프트웨어융합대학") var d = dep8;
  else if(element.value == "공과대학") var d = dep9;
  else if(element.value == "예체능대학") var d = dep10;
  else if(element.value == "법학부") var d = dep11;

  target.options.length = 0;

  for (x in d){
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }

}
