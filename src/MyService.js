import axios from 'axios';

class Service{
  constructor(){
  }
  async sendRequest(name){
      let mydata = {};
      await axios.request('https://api.github.com/search/users?q='+name).then((res)=>{
        mydata = (res.data);
    },(err)=>{
        mydata.err = 'nodata'
    });
    return mydata
  }
}

export default Service;