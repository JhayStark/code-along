import React from "react";
import logo from "../assets/finnish.jpeg"
function Practice (){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 shadow-md"></div>
            <div className="h-20 overflow-hidden">
                <image src={logo} alt=""/>
            </div>
            <div>
                <h3>Lorem ipsum dolor sit amet.
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Adipisci minus deserunt blanditiis, 
                     aliquam eaque ex error omnis ipsum iste quibusdam sapiente ad aperiam alias est cupiditate tenetur reiciendis quas inventore! w0

                </p>
            </div>
        </div>
    )
}

export default Practice