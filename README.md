<!--h-->
# Ajaxios
no more coding to sending 
a simple library Based on your HttpClient request to sending  request ajax using from it's very simple that's can be used 
with Jquey,Angular,Vuejs,Rectjs 


### -> Requirements
      Ajxios have no requirements that by default it's require just http api 
      you can use any of this api 
      HttpClient for Angular 
      Jquery.ajax for Jquery
      Axios,or fecth for Reactjs,Vuejs
     
### -> Installation
     the installaion is simple
     
     npm install @belharradi.j/ajaxios
     
     ------------ or ----------

     include in head tag the script 
     
     <script src="https://unpkg.com/@belharradi.j/ajaxios"></script>
     
### -> Documentation

the usage it's simple just follow the steps


#### -> Create a form html

        <form action="host/pah" method="GET" id="form">
        
                  <label> input filied </label>
                  
                  <input type="text" name="input" value=" text ..."/>
                  
                  <input type="button"  id="send" value="send">
        </form>
 #### -> Create A instance of Ajaxios 
          for create a instance of ajaxios
            var ajax= new Ajaxios(options,requirements ={});
            options it's a object like :
            {
            eleform:document.getElementById('form'),// element of form
            http:axios,// http api used for sending request like httpclient,$.ajax,axios
            type:"Axios"// type of Object http it can be ["Axios","Jquery.ajax","HttpClient","fetch"] 
            headers:{Authorization:"toke",
                    ............
            },// object of headers 
            }
            for Requirements look at validation step
#### -> Appending data 
        
          you can append data to Ajaxios before you sending
         
         var ajaxios.append(
         {
           keys_parameter:value,
           ..................
           ..................
         }
         );
#### -> Validation 
         
         the amazing thing it's you testing data in real Time editing by user before sending 
         request will be send if all function of the keys_parameter return true
         requerments = {
           keys_parameter:(values_of_key)=>{
              
              if (values_of_keys.length>0)

                    return 1
               else 
                    return 0;
           },
           ..................
           .................
          }
          
#### -> Sending request 
          
          before you sending the request you can execute a function passing as arguments for method send
          
          the function send return A promise Http Object like Httpclient, $.ajax, fetch or axios
          
          document.getElementById('send').click=()=>{
          
          ajaxios.send().then(function(res){

               document.getElementById('send').innerHTML="send"

          });
          }
          or 
            document.getElementById('send').click=()=>{
          
          ajaxios.send(()=>{
                 
                 ...............
          
          }).then(function(res){

               document.getElementById('send').innerHTML="send"

          });
          }
          

          if you want to use http api just call ajax.http






