import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {blog: []}

  componentDidMount() {
    this.getstarted()
  }

  getstarted = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data1 = await response.json()

    const updateing = data1.teams.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.team_image_url,
    }))

    this.setState({blog: updateing})
  }

  render() {
    const {blog} = this.state

    return (
      <div className="bgimg">
        <h1 className="ipl"> IPL Dashboard</h1>
        <div className="main1">
          {blog.map(each => (
            <TeamCard happy={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
