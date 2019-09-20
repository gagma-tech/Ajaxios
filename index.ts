declare const axios:any;

export class Ajaxios {


    private method:string;
    private url:string;
    private data:Object;
    private form:FormData;

       constructor(eleform){
         this.method=eleform.method;
         this.url=eleform.action;
         this.form=new FormData(eleform);
         this.data=this.dict(this.form);
        }

        // return object from FormData
       public dict(form):Object{

        var data={};
        for(let d of form.entries())
                    data[d[0]]=d[1];
         return data;
       }
       // test parameter before sending
       public validate(data_validate)
        {
            for(var key in data_validate)
                if(!data_validate[key](this.data[key])) return 0;
            
            return 1;
        }
        // append query to data
        public append(object_data)
        {
              for(var key in object_data) 
                   this.data[key]=object_data[key];
         }

       public send(before,require){
           
            if(!this.validate(require))
                       return null;
             before();
             return axios({
                     method: this.method,
                     url: this.url,
                     params:this.data
                      });
         }

}
