import './index.css'

const ImageThumbnails = props => {
  const {imageDetails} = props

  return (
    <li className="each-list-image">
      <img
        src={imageDetails.thumbnailUrl}
        alt={imageDetails.thumbnailUrl}
        width={70}
      />
    </li>
  )
}

export default ImageThumbnails
