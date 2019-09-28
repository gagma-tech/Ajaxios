declare const axios:any;

export class Ajaxios {

    private eleform:any;
    private data:Object;
    private requirements:Object;
    public axios:any;

       constructor(eleform,axios,requirements){
         this.eleform=eleform;
         this.requirements=requirements;
         this.data={};
         this.axios=axios;
         this.validation(requirements);
        }

        // return object from FormData
       public dict(){
        new FormData(this.eleform).forEach((value, key) => {this.data[key]=value;});
       }

       // test parameter before sending
       public validate(data_validate)
        {
            for(let key in data_validate)
                if(!data_validate[key](this.data[key])) return 0;
            
            return 1;
        }

        public validation(dataObject){
            
            for(let key in dataObject)
                this.eleform[key].addEventListener('change',(e)=>{ dataObject[key](this.eleform[key].value); },false);
                
        }
        // append query to data
        public append(object_data)
        {
              for(var key in object_data) 
                   this.data[key]=object_data[key];
         }

         // sending request using ajax
         public send(before){
             this.dict();           
             before();
             try{
                if(!this.validate(this.requirements)) throw "invalid data";
                  return this.axios({
                                    method: this.eleform.method,
                                    url: this.eleform.action,
                                    params:this.data
                                  });
            } catch(err){ console.log(err); }
            
         }

}
