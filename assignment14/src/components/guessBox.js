import React, { Component } from "react";
import ImageDiv from "./imageDiv";
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"
import pic4 from "./images/pic4.jpg"
import pic5 from "./images/pic5.jpg"
import pic6 from "./images/pic6.jpg"
import pic7 from "./images/pic7.jpg"
import pic8 from "./images/pic8.jpg"
import pic9 from "./images/pic9.jpg"
import pic10 from "./images/pic10.jpg"
import pic11 from "./images/pic11.png"
import pic12 from "./images/pic12.jpg"




class GuessBox extends Component {
    state = {
        images: [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12],
        boardState: [<ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />, <ImageDiv />]
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="gameContent">
                  {this.boardState}
                </div>
            </div>
            // <div className="container-fluid">
            //     <div className="gameContent">
            //         <div className="row">
            //             <div className="col">
            //                 <img className = "actualImage" src={pic1}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic2}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic3}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic4}></img>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col">
            //                 <img className = "actualImage" src={pic5}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic6}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic7}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic8}></img>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col">
            //                 <img className = "actualImage" src={pic9}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic10}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic11}></img>
            //             </div>
            //             <div className="col">
            //                 <img className = "actualImage" src={pic12}></img>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default GuessBox;
