var quizData = [
{
  "questions": "1. question 1",
  "answers" :["ans1","ans2","ans3","ans4"]
},
{
  "questions": "2. question 1",
  "answers" :["ans11","ans2","ans3","ans4"]
},
{
  "questions": "3. question 1",
  "answers" :["ans12","ans2","ans3","ans4"]
},
{
  "questions": "4. question 1",
  "answers" :["ans13","ans2","ans3","ans4"]
},
{
  "questions": "5. question 1",
  "answers" :["ans14","ans2","ans3","ans4"]
}
];
var i;
var j=0;
var set_q=[];
var set_ans=[];
var temp = document.getElementsByClassName('ans');
var question=document.getElementById('question');
var answers=[];
var score=0;
var z=0;
var ans=["A","C","D","B","A"];
var container=document.getElementsByTagName('ul');
var result_page=document.getElementsByClassName('result-page');
var marks=document.getElementById('score');
var footer=document.getElementById('footer');
GetData (quizData);

	function GetData(arr)
	{
	document.getElementById("prev").style.display='none';
	  set_q [j]= arr[j].questions;
	  question.innerHTML=set_q;
	  for (i=0; i<4; i++)
	  {
	    set_ans[i]=arr[0].answers[i];
	    temp[i].innerHTML = set_ans[i];
	  }
	}

	function nextbutton(arr){
		if(!document.querySelector('input[name="question"]:checked')){
				document.getElementById("alert").style.display='block';
		}
		else{	document.getElementById("alert").style.display='none';
				document.getElementById("prev").style.display='block';
				if(j==arr.length-1)
				{	
					container[0].style.display='none';
					footer.style.display="none";
					result_page[0].style.display='block';
					answers[j]=document.querySelector('input[name="question"]:checked').value;
					console.log(answers[j]);
					for (var l = 0; l < answers.length; l++) {
										if(answers[l]==ans[l])
					 					{	
					 						score++;
										}
									}
					marks.innerHTML="Congratulation! Your score is : " +score+"out of "+ ans.length;

				}
				else
				{
					if(j==arr.length-2)
					{document.getElementById('next').style.backgroundImage="url('result.png')";}

				  		set_q[j+1] = arr[j+1].questions;
				  		question.innerHTML=set_q[j+1];
				  	for ( var k=0; k<4; k++)
					{
					    set_ans[k]=arr[j+1].answers[k];
					    temp[k].innerHTML = set_ans[k];
					 }
					 answers[j]=document.querySelector('input[name="question"]:checked').value;
					 console.log(j);
					 console.log(answers[j]);
					 j++;
				}
					if (answers[j]==undefined)
					  {
					    
					    var unchck = document.getElementsByTagName('input')
					    for (i=0; i<4; i++)
					    { 
					      unchck[i].checked=false;
					    }
					  }
					  else
					  {
					    document.getElementById(answers[j]).checked=true;
					  }
			}
	  }

	  function previousbutton(arr){
	  	
	  	if(!document.querySelector('input[name="question"]:checked')){
				document.getElementById("alert").style.display='block';

		}				
		else{	
				if(j==1){		
	  			document.getElementById("prev").style.display='none';
	  			}
				
			
				document.getElementById("alert").style.display='none';	  
				answers[j]=document.querySelector('input[name="question"]:checked').value;
				 document.getElementById(answers[j-1]).checked=true;
	   				

			
	  			j--;
	  			document.getElementById('next').style.backgroundImage="url('Next-icon.png')";
	  			document.querySelector('input[name="question"]:checked').value=answers[j];
	  			question.innerHTML=set_q[j];
		  		for ( var k=0; k<4; k++)
				{
			   	 temp[k].innerHTML=arr[j].answers[k];

			 	}
			
			

		}
	  }