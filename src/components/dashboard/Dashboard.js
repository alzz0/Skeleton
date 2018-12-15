import React,{Component} from "react"
import Notifications from "./Notifications"
class Dashboard extrends Component{
    render(){
        return(<div className="container">
               <div className="row">
                              <div className="col s12 m6"></div>
                              <div className="col s12 m5 offset-m1"><Notifications/></div>
             </div>
             

               
               </div>)
    }
}

export default Dashboard