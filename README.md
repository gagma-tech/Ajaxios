<!--h-->
# Ajaxios

a simple library based on axios to sending data from using with just passing the element form to the constructor  Ajaxios

<ul> <h2>Requirements</h2
    <li> Axios
</ul>

### installation
     the installaion is simple
     npm install @belharradi.j/ajaxios
     
     ------------ or ----------
     
     include in head tag the script 
     
     <script src="../js/Ajaxois/index.js"></script>
     
### documentation

the usage it's simple just follow the steps


#### Create a form html
        
        <form action="/host/pah" method="GET" id="form">
                  <label> input filied </label>
                  <input type="text" name="input" value=" text ..."/>
                  <input type="button"  id="send" value="send">
        </from>
 #### Create A instanse of Ajaxios
        
         just pass the element form to Ajaxios it get all infromation  
         
         var ajaxios = new Ajaxios(document.getElementById('form'));
#### Appending data 
        
          you can append data to Ajaxios before you sending
         
         var ajaxios.append(
         {
           keys_parameter:value,
           ..................
           ..................
         }
         );
#### validation 
         
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
          
#### sending request 
          
          before you sending the request you can execute a function and test the validate object
          
          ajaxios.send(()=>{
              console.log("the request is sending ..........");
          },validate);






