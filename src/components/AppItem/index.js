// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} className="app-logo" alt={appName} />
      <p className="name"> {appName} </p>
    </li>
  )
}

export default AppItem
