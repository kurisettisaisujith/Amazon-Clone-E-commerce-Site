import ReactImageMagnify from 'react-image-magnify';




import "./zoom.css"

const Zoom = () => {

  const url = "https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-2-sm.png"
  return (
    <div>
     <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: url
    },
    largeImage: {
        src: url,
        width: 1200,
        height: 1800
    }
}} />
 
    </div>
  )
}

export default Zoom
