// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails

  return <li className="tab-item">{displayText}</li>
}

export default TabItem
