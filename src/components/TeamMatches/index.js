import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {a: {}, b: {}, userData: {}}

  componentDidMount() {
    this.getblog()
  }

  getblog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dataD = await response.json()
    const latestimg = {
      imageUrl: dataD.team_banner_url,
    }

    const latestMatch = {
      competing: dataD.latest_match_details.competing_team,
      competingLogo: dataD.latest_match_details.competing_team_logo,
      date: dataD.latest_match_details.date,
      firstInnings: dataD.latest_match_details.first_innings,
      id: dataD.latest_match_details.id,
      man: dataD.latest_match_details.man_of_the_match,
      result: dataD.latest_match_details.result,
      second: dataD.latest_match_details.second_innings,
      umpires: dataD.latest_match_details.umpires,
      venue: dataD.latest_match_details.venue,
    }

    const recentMatches = dataD.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manofthe: each.man_of_the_match,
      id: each.id,
      status: each.match_status,
      name: each.competing_team,
      imgUrl: each.competing_team_logo,
    }))

    this.setState({a: latestimg, b: latestMatch, userData: recentMatches})
  }

  render() {
    const {a, b, userData} = this.state
    const {imageUrl} = a

    return (
      <div className="bgr">
        <div>
          <img src={imageUrl} className="imgI" alt="avatar" />

          <LatestMatch latest={b} recenttime={userData} key={b.id} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
