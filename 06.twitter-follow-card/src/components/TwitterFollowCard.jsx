import { useState } from 'react'
import '../App.css'

function TwitterFollowCard({userName, children, isFollowed}) {
  const [isFollowing, setIsFollowing] = useState(isFollowed)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="App tw-followCard">
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`Avatar de ${name}`} />

        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button' onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
