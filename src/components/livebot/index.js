import React from "react";
import {styles} from "./styles";
import "./chatbox.css"


const SupportWindow= props => {
    return (
        <div 
            //className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
            
        >
           <div >
            <div className="heading"><h3 className="ms-3 align-items-center">Communication</h3></div>
            <div className="row">
                <div className="col-9">
                    <input type="text" placeholder="enter here" className="userInput"/>
                </div>
                <div className="col-1 sent">
                    <i class="fa-regular fa-paper-plane" ></i>
                </div>
            </div>
           
        </div>
            
         
        </div>
    )
}
export default SupportWindow;