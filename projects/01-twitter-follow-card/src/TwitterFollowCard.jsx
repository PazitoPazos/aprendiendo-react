import { useState } from 'react'
export default function TwitterFollowCard({ children, userName, initialIsFollowing }) { 
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
          alt="El avatar de MiduDev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-username'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'}
          onClick={handleClick}
        >
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}