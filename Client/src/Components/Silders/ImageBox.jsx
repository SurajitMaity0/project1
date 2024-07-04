import react from 'react';
import './Styles/SliderImage.sass'


const ImageBox = (props) => {
  const { url , name } = props;

  return (
    <>
        <div className="ImageBox">
          <img src={url} alt={name} />
        </div>
        
    </>
  )
}

export default ImageBox;