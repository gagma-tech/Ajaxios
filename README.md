<!--h-->
# Ajaxios

a simple library based on axios to sending data from using with just passing the element form to the constructor Ajaxios
before using Ajaxios you most read documentation of  [Axois](https://github.com/axios/axios)


### -> Requirements
     -Axios 
     npm install Axois
     npm install @belharradi.j/ajaxios
     
     ------------ or ----------
     
     include in head tag the script 
     
     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
     
### -> Installation
     the installaion is simple
     
     npm install @belharradi.j/ajaxios
     
     ------------ or ----------
     
     include in head tag the script 
     
     <script src="https://unpkg.com/@belharradi.j/ajaxios@1.1.2/index.js"></script>
     
### -> Documentation

the usage it's simple just follow the steps


#### -> Create a form html
        
        <form action="/host/pah" method="GET" id="form">
                  <label> input filied </label>
                  <input type="text" name="input" value=" text ..."/>
                  <input type="button"  id="send" value="send">
        </from>
 #### -> Create A instanse of Ajaxios  
         just pass the element form to Ajaxios it get all infromation  
         var axios = require('axios');
         var ajaxios = new Ajaxios(document.getElementById('form'),axios);
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
         
         the amazing thing it's you testing data before sending 
         request will be send if all function of the keys_parameter return true
         validate = {
           keys_parameter:(values_of_keys)=>{
              
              if (alues_of_keys.length>0)
                    return 1
               else 
                    return 0;
           },
           ..................
           .................
          }
          
#### -> Sending request 
          
          before you sending the request you can execute a function and test the validate object
          the function send is return axios object
          document.getElementById('send').click=()=>{
          ajaxios.send(()=>{
              console.log("the request is sending ..........");
              document.getElementById('send').innerHTML="sending"

          },validate).then(function(res){

               document.getElementById('send').innerHTML="send"

          });
          }

          if you want to use axios just call ajaxios.axios object






