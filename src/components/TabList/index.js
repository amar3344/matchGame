import './index.css'

const TabList = props => {
  const {tabDetails, getTabImageThumbnails, isActive} = props
  console.log(props)

  const getTabImage = () => {
    getTabImageThumbnails(tabDetails.tabId)
  }

  const activeClassName = isActive ? 'active-tab-text' : ' '

  return (
    <li className={`each-tab ${activeClassName}`}>
      <button type="button" onClick={getTabImage}>
        {tabDetails.displayText}
      </button>
    </li>
  )
}

export default TabList
