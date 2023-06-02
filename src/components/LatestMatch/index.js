import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {latest, recenttime} = props

  const {
    competing,
    competingLogo,
    date,
    firstInnings,

    man,
    result,
    second,
    umpires,
    venue,
  } = latest

  return (
    <div>
      <p>Latest Match</p>
      <div className="match">
        <div className="con">
          <ul className="one">
            <li className="p">{competing}</li>
            <li className="p">{date}</li>
            <li className="p">{venue}</li>
            <li className="p">{result}</li>
          </ul>
          <div>
            <img src={competingLogo} alt="avatar" className="logo" />
          </div>
          <ul className="onee">
            <li className="p">First innings</li>
            <li className="p">{firstInnings}</li>
            <li className="p">Second Innings</li>
            <li className="p">{second}</li>
            <li className="p">Man of the Match</li>
            <li className="p">{man}</li>

            <li className="p">Umpire</li>
            <li className="p">{umpires}</li>
          </ul>
        </div>
        {recenttime.map(each => (
          <MatchCard happy={each} key={each.id} />
        ))}
      </div>
    </div>
  )
}

export default LatestMatch
