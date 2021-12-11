let button = document.querySelector('.extra2');
let frame=document.querySelector('.extra1');
let frameFill=document.querySelector(".extra3");
button.onmousedown=function(event){
  let shiftX = event.clientX - button.getBoundingClientRect().left;
      // shiftY not needed, the buttom moves only horizontally
  document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
  
  function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - frame.getBoundingClientRect().left;
    if (newLeft < 0)  {
          newLeft = 0;
        }else if (newLeft>0 && newLeft<166){ 
          frame.style.backgroundColor = "pink";
          let supporting=document.querySelector(".supporting");
          supporting.style.display="none";
          let summary=document.querySelector('.summary');
          summary.style.display="inherit";
          let preamble=document.querySelector(".preamble");
          preamble.style.display="inherit";
          let participation=document.querySelector(".participation");
          participation.style.display="none";
          let intro=document.querySelector(".intro");
            intro.style.display="grid";
          let requirements=document.querySelector(".requirements");
            requirements.style.display="none";
        }
        else if(newLeft > 166 && newLeft < 332) {
            frame.style.backgroundColor = "red";
            let benefits=document.querySelector(".benefits");
          benefits.style.display="none";
          let supporting=document.querySelector(".supporting");
          supporting.style.display="grid";
          let explanation=document.querySelector('.explanation');
          explanation.style.display="inherit";
          let summary=document.querySelector('.summary');
          summary.style.display="none";
          let preamble=document.querySelector(".preamble");
          preamble.style.display="none";
          let requirements=document.querySelector(".requirements");
          requirements.style.display="none";
          if (document.documentElement.clientWidth>=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="none";
          }else if(document.documentElement.clientWidth<=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="inherit";
          }
        }
        else if(newLeft > 332 && newLeft<498) {
          let benefits=document.querySelector(".benefits");
          benefits.style.display="none";
          frame.style.backgroundColor = "blue";
          let explanation=document.querySelector('.explanation');
          explanation.style.display="none";
          let participation=document.querySelector(".participation");
          participation.style.display="inherit";
          let requirements=document.querySelector(".requirements");
          requirements.style.display="none";
          if (document.documentElement.clientWidth>=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="none";
          }else if(document.documentElement.clientWidth<=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="inherit";
          }
        }
        else if(newLeft > 498 && newLeft<664) {
          frame.style.backgroundColor = "green";
          let participation=document.querySelector(".participation");
          participation.style.display="none";
          let benefits=document.querySelector(".benefits");
          benefits.style.display="inherit";
          let requirements=document.querySelector(".requirements");
          requirements.style.display="inherit";
          let requirement_title=document.getElementsByTagName("h3")[4];
          requirement_title.style.display="inherit";
          let requirement_firstP=document.getElementsByTagName("p")[11];
          requirement_firstP.style.display="inline";
          let requirement_secondP=document.getElementsByTagName("p")[12];
          requirement_secondP.style.display="none";
          let requirement_thirdP=document.getElementsByTagName("p")[13];
          requirement_thirdP.style.display="none";
          let requirement_fourthP=document.getElementsByTagName("p")[14];
          requirement_fourthP.style.display="none";
          let requirement_fivethP=document.getElementsByTagName("p")[15];
          requirement_fivethP.style.display="none";
          requirements.style.setProperty('--visible','hidden');
          if (document.documentElement.clientWidth>=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="none";
          }else if(document.documentElement.clientWidth<=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="inherit";
          }
          
        }
        else if(newLeft > 664 && newLeft<830) {
          frame.style.backgroundColor = "brown";
          let benefits=document.querySelector(".benefits");
          benefits.style.display="none";
          let requirement_title=document.getElementsByTagName("h3")[4];
          requirement_title.style.display="none";
          let requirement_firstP=document.getElementsByTagName("p")[11];
          requirement_firstP.style.display="none";
          let requirement_secondP=document.getElementsByTagName("p")[12];
          requirement_secondP.style.display="inline";
          let requirement_thirdP=document.getElementsByTagName("p")[13];
          requirement_thirdP.style.display="inline";
          let requirement_fourthP=document.getElementsByTagName("p")[14];
          requirement_fourthP.style.display="none";
          let requirement_fivethP=document.getElementsByTagName("p")[15];
          requirement_fivethP.style.display="none";

          let requirements=document.getElementById("zen-requirements");
          requirements.style.setProperty('--visible','visible');        
          if (document.documentElement.clientWidth>=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="none";
          }else if(document.documentElement.clientWidth<=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="inherit";
          }



        }
        else if(newLeft > 830 && newLeft<996) {
          frame.style.backgroundColor = "orange";
          console.log("ok");
          let requirement_secondP=document.getElementsByTagName("p")[12];
          requirement_secondP.style.display="none";
          let requirement_thirdP=document.getElementsByTagName("p")[13];
          requirement_thirdP.style.display="none";

          let requirement_fourthP=document.getElementsByTagName("p")[14];
          requirement_fourthP.style.display="inline";
          let requirement_fivethP=document.getElementsByTagName("p")[15];
          requirement_fivethP.style.display="inline";

          let requirements=document.getElementById("zen-requirements");
          requirements.style.setProperty('--top','0em'); 
          requirements.style.setProperty('--EndRow',9); 
          requirements.style.setProperty('--EndRow1275',10);
          requirements.style.setProperty('--top1290',"1.5em");
          requirements.style.setProperty('--top1310',"3em");

          if (document.documentElement.clientWidth>=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="none";
          }else if(document.documentElement.clientWidth<=1000){
            let intro=document.querySelector(".intro");
            intro.style.display="inherit";
          }
        }
        let rightEdge = frame.offsetWidth - button.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        
        button.style.left =((100*newLeft)/document.documentElement.clientWidth) + 'vw';
        frameFill.style.width=((100* (button.offsetWidth+newLeft) )/document.documentElement.clientWidth)+ "vw";
      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };
   button.ondragstart = function() {
      return false;
}