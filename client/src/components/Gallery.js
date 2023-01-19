import React from "react";

import gallery_classes from "./Gallery.module.css";

import a1 from "../img/a1.jpg";
import a2 from "../img/a2.jpg";
import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpg";


function Gallery (){
  return(
    <>
    <div className="container-fluid">
      <div class={`${gallery_classes.row}`}>
        <div className={`${gallery_classes.column}`}>
          <div className={`${gallery_classes.long}`}> <img src={a1}/> </div>
          <div className={`${gallery_classes.short}`}> <img src={a2}/> </div>
        </div>
        <div className={`${gallery_classes.column}`}>
          <div className={`${gallery_classes.short}`}><img src={b1} ></img></div>
          <div className={`${gallery_classes.long}`}><img src={b2} ></img></div>
        </div>
        <div className={`${gallery_classes.column}`}>
          <div className={`${gallery_classes.long}`}> <img src={a1}/> </div>
          <div className={`${gallery_classes.short}`}> <img src={a2}/> </div>
        </div>
        <div className={`${gallery_classes.column}`}>
          <div className={`${gallery_classes.short}`}><img src={b1} ></img></div>
          <div className={`${gallery_classes.long}`}><img src={b2} ></img></div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Gallery;