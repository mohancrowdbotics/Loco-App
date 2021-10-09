import React from "react";
import { SRLWrapper , useLightbox } from "simple-react-lightbox";
import Container from 'react-bootstrap/Container';
import Galleryimg from '../../images/gallery-img.png';
import Galleryimg1 from '../../images/gallery-img-1.png';
import Galleryimg2 from '../../images/gallery-img-2.png';


function MyComponent() {
    const { openLightbox } = useLightbox()
  return (
    <SRLWrapper>
    <Container>
    <div className="galler-flex">
     <a href={Galleryimg}>
        <img src={Galleryimg} alt="Umbrella" />
      </a>
      <a href={Galleryimg1}>
        <img src={Galleryimg1} alt="Blue sky" />
      </a>
      <a href={Galleryimg2}>
        <img src={Galleryimg2} alt="Blue sky" />
      </a>
      <a href={Galleryimg}>
        <img src={Galleryimg} alt="Blue sky" />
      </a>
      </div>
      <div className="offer-short-btn">
       <button className="gredient-bordered-btn" type="button" onClick={() => openLightbox()}>
        Show all photos
       </button>
      </div>
      </Container>
    </SRLWrapper>
  );
}

export default MyComponent;