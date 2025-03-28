import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

function App() {

  return (
    <>
      <TwitterFollowCard userName='SoyLuisArrieta' isFollowed>Luis Eduardo Arrieta Avilez</TwitterFollowCard>
      <TwitterFollowCard userName='midudev'>Miguel Angel Durán</TwitterFollowCard>
    </>
  )
}

export default App
