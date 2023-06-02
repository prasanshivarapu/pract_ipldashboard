import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {happy} = props
  const {id, name, imageUrl} = happy

  return (
    <div className="main">
      <Link to={`/team-matches/${id}`} className="cont">
        <img src={imageUrl} alt={name} className="imgurl" />
        <h1 className="name">{name}</h1>
      </Link>
    </div>
  )
}

export default TeamCard
