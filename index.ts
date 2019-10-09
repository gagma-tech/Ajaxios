interface options {
    eleform:any;
    http:any;
    type:String;
    headers:Object;
}

export class Ajaxios {
    public eleform:any;
    public data:Object;
    public requirements:Object;
    public  http:any;
    public type:any;
    public headers:any;

       constructor(options:options,requirements:Object={}){
                this.eleform=options.eleform;
                this.requirements=requirements;
                this.data={};
                this.http=options.http;
                this.type=options.type || "fetch";//$.ajax,fetch,request,axios,httpclient
                this.headers=options.headers || {};
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
         // validation of requirements
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

         //sending request using ajax
         public send(beforeSend=()=>{}){
             this.dict();           
             beforeSend();
             try{
                if(!this.validate(this.requirements)) throw "invalid data";
                let data=this.data;
                  if(this.type==="Axios"){
                            return this.http({
                                            method: this.eleform.method,
                                            url: this.eleform.action,
                                            params:data,
                                            headers:this.headers,
                                        });
                                    }
                       
                 if(this.type==="HttpClient"){
                     
                                      return this.http[this.eleform.method](this.eleform.action,data,{headers:new Headers(this.headers)});
                                    }

                if(this.type==="JqueryAjax"){
                                        
                                         return this.http({
                                             url:this.eleform.action,
                                             method:this.eleform.method,
                                             data:data,
                                             headers:this.headers
                                             });
                                       }
                return fetch(this.eleform.action,{
                            method: this.eleform.action,
                            headers: new Headers(this.headers),
                            body: JSON.stringify(data)
                });

            } catch(err){ console.log(err); }
            
         }

}