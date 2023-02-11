import './index.css'

const ImageThumbnails = props => {
  const {imageDetails, thunbnailId} = props

  const getThumbnailId = () => {
    thunbnailId(imageDetails.id)
  }

  return (
    <li className="each-list-image">
      <button
        type="button"
        className="thumbnail-button"
        onClick={getThumbnailId}
      >
        <img
          src={imageDetails.thumbnailUrl}
          alt={imageDetails.thumbnailUrl}
          width={70}
        />
      </button>
    </li>
  )
}

export default ImageThumbnails
