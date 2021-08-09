//ex_01
var myName = "양희영";
document.write("안녕하세요. 만나서 반갑습니다. 저는 " + myName + "입니다.", "<br>");

//ex_02
var thisYear = Number("2021");
document.write("올해의 연도는" + thisYear + "년 입니다.", "<br>");

//ex_03
var $str_img = "<img src='./img/snoopy_01.png'>";
document.write($str_img, "<br>");

//ex_04
var img_source = "snoopy_02.png";
var $str_bg = "<div class='snoopy' style='background-image: url(./img/" + img_source + ");'></div>";
document.write($str_bg);
