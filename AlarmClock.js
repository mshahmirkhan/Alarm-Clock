<html>
    <head>
        <title>ALARM CLOCK</title>
        <link rel = "icon" href="images/cv.png" type="image/x-icon"> 
        <mata charaset="utf-8">
        <mata name="viewport" content="width=device-width , initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    </head>
    <style>
        .clockSize{
            font-size: 970%;
            font-family:   Times, 'Times New Roman', serif;
        }
        #eye{
            
             border: none;
             background-color: inherit;
        }
    </style>
    <body >
        <br><br><br>

            <div class="row" lg-12  >
                <div class="container" lg-5 md-1  ></div>
                <div class="container text-center" lg-4 md-10 >
                    <span id= "hours"   class="clockSize">h</span>  <span class="clockSize" id=":"> :</span>
                    <span id="minutes" class="clockSize">h</span>  <span class="clockSize" id=":2"> :</span>
                    <span id="secound" class="clockSize">h</span>
                </div>
                <div class="container" lg-3 md-1  ></div>
            </div> 

            <div class="row" lg-12  >
                <div class="container" lg-5 md-1  ></div>
                <div class="container text-center " lg-4 md-10  >
                    <div class="btn fa fa-eye" id="eye" id="eye2" style="font-size:24px;" onclick="ChangeTheam()"></div><!--eye button-->
                </div>
                <div class="container" lg-3 md-1  ></div>
            </div> 

            
            <br><br><br>


            <div class="row" lg-12  >
                <div class="container" lg-5 md-1  ></div>
                <div class="container text-center" lg-4 md-10 >
                    
                    <select  id="H" style="width: 50px; " >
                       <option >H</option>
                       <option value="1">01</option>
                       <option value="2">02</option>
                       <option value="3">03</option>
                       <option value="4">04</option>
                       <option value="5">05</option>
                       <option value="6">06</option>
                       <option value="7">07</option>
                       <option value="8">08</option>
                       <option value="9">09</option>
                       <option value="10">10</option>
                       <option value="11">11</option>
                       <option value="12">12</option>
                       <option value="13">13</option>
                       <option value="14">14</option>
                       <option value="15">15</option>
                       <option value="16">16</option>
                       <option value="17">17</option>
                       <option value="18">18</option>
                       <option value="19">19</option>
                       <option value="20">20</option>
                       <option value="21">21</option>
                       <option value="22">22</option>
                       <option value="23">23</option>
                       <option value="24">24</option>
                    </select>
                    
                    
                    <select  id="M" style="width: 50px; " >
                        <option >M</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                     </select>
                    
                    
                     <select  id="S" style="width: 50px; " >
                        <option >S</option>
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                     </select>
                    <br><br><br><br>
                     <p id="demo2" style="font-size:100px; color:white;  background-color:red;"> </p>
                    
                </div>
                
                <div class="container" lg-3 md-1  ></div>
            </div> 
            
        </div>
       


        <script>
            function test(){
                document.getElementById("demo2").innerHTML="WAKE UP";
                
            }//test()
            var d=new Date();
               var h=d.getHours();
               document.getElementById("hours").innerHTML=h;
   
               var m=d.getMinutes();
               document.getElementById("minutes").innerHTML=m;
   
               var s=d.getSeconds();
               document.getElementById("secound").innerHTML=s;


            setInterval(repeat,1000);

            function repeat(){
               var d=new Date();
               var h=d.getHours();
               document.getElementById("hours").innerHTML=h;
   
               var m=d.getMinutes();
               document.getElementById("minutes").innerHTML=m;
   
               var s=d.getSeconds();
               document.getElementById("secound").innerHTML=s;
             

            // taking value  of time
            var a=document.getElementById("H").value;
              var b=a*3600000;//converted to millisecound
            var c=document.getElementById("M").value;
              var d=c*60000;//converted to millisecound
            var w=document.getElementById("S").value;
              var x=w*1000;//converted to millisecound

            var e=d+b+x;//addition of millisecound             e
            

             //live values of time
            var f=h*3600000;//converted to millisecound
            var g=m*60000;//converted to millisecound
            var z=s*1000;//converted to millisecound
            
            var j=f+g+z;//addition of millisecound             j




               var y,i=0;
               if(e>j && i==0){
                   y=e-j;
                   setInterval(test,y);
                   i++;
               }else if(j>e && i==0){
                   y=99999999999;
               }
                
               
            }
            var i=0;
           function ChangeTheam(){
                i++;
                if(i%2){
                    document.body.style.backgroundColor= "black";
                    document.getElementById("hours").style.color = "white";
                    document.getElementById("minutes").style.color = "white";
                    document.getElementById("secound").style.color = "white";
                    document.getElementById("eye").style.color = "white";
                    document.getElementById(":").style.color = "white";
                    document.getElementById(":2").style.color = "white";
                   
                    
                }else{
                    document.body.style.backgroundColor= "white";
                    document.getElementById("hours").style.color = "black";
                    document.getElementById("minutes").style.color = "black";
                    document.getElementById("secound").style.color = "black";
                    document.getElementById("eye").style.color = "black";
                    document.getElementById(":").style.color = "black";
                    document.getElementById(":2").style.color = "black";
                }//else
           }//change theam function
            
        </script>
    

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    </body>
</html>
