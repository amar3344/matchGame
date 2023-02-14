import './index.css'

const TabList = props => {
  const {tabDetails, getTabImageThumbnails, isActive} = props

  const getTabImage = () => {
    getTabImageThumbnails(tabDetails.tabId)
  }

  const activeClassName = isActive ? 'active-tab-text' : ' '

  return (
    <li className="each-tab">
      <button type="button" onClick={getTabImage} className={activeClassName}>
        {tabDetails.displayText}
      </button>
    </li>
  )
}

export default TabList
