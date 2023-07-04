var play1={
    p1_count:0,
    val:[],
};

 var play2={
    p2_count:0,
    val:[],
};
var count=0;
console.log("Strike");
p1_round=document.getElementById("team1").children;
p2_round=document.getElementById("team2").children;
document.getElementById("strike").onclick=function(){
   

    var r1=Math.floor(Math.random()*100+1);
    var r2=Math.floor(Math.random()*100+1);
    console.log(r1);
    console.log(r2);
    if(count==5)
    {
        document.getElementById("strike").textContent="Who Wins?";
    }
  
   else if(count==6)
   {
    if(play1.p1_count<play2.p2_count){
    document.getElementById("strike").textContent="Match WIN by team MANCHESTER UNITED";
   }
    else if(play1.p1_count>play2.p2_count)
    {
        document.getElementById("strike").textContent="Match WIN by team FC BARCELONA";
    }
    else{
        document.getElementById("strike").textContent="Match DRAW";
    }
   }
else if(count<5){
    if(r1%2==0)
    {
        
        play1.p1_count++;
        // play1.val.push(r1);
        document.getElementById("t1score").textContent=play1.p1_count;
    }
    if(r2%2==0)
    {
        // console.log(r2);
        play2.p2_count++;
        // play2.val.push(r2);
        document.getElementById("t2score").textContent=play2.p2_count;
    }
    play1.val.push(r1);
       play2.val.push(r2);
    round();
}
count++;
}
function round(){
    c=0,d=0;
    play1.val.forEach((a,b)=>{
        console.log("value of p1",++c," ",a);
        if(a%2==0){
          
            p1_round[b].style.backgroundColor="green";
        }
        else
        {
            // console.log("value of p1",b);
            p1_round[b].style.backgroundColor="red";
        }
    });
    play2.val.forEach((a,b)=>{
        console.log("value of p2",++d," ",a);
        if(a%2==0){
            
            p2_round[b].style.backgroundColor="green";
        }
        else
        {
            // console.log("value of p2",b);
            p2_round[b].style.backgroundColor="red";
        }
    });
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

}


