export class CreateForm {

    public formHtml:any;
    
    constructor(action,method,id){
        this.formHtml = document.createElement('form');
        this.formHtml.action = action;
        this.formHtml.method = method;
        this.formHtml.id = id;
    }

    public getJsonByUrl(){

    }

    public trait(inputs){
        for(let input of inputs){
            let ele = document.createElement(input.tag);
            for(let i in input){
                 if(i !=='tag' && i !=='options')
                           ele[i]=input[i];
                 if(i === 'options'){
                            for(let j of input.options){
                                    let opt=document.createElement('option');
                                    opt.value = j.value ;
                                    opt.innerHTML=j.txt;
                                    ele.append(opt);
                            }
                        
                 }
            }
            this.formHtml.append(ele);
        }

    }
    public toHtml(){

        return this.formHtml.o;
    }


}

var form = new CreateForm('jjj','dd','dd');
form.trait([
    {
        tag:'input',
        name:'jj',
        value:'cc',
        type:'checkbox'
    }
]);

form.toHtml();