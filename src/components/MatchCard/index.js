import './index.css'

const MatchCard = props => {
  const {happy} = props
  console.log(happy)
  const {name, imgUrl, result, status} = happy

  return (
    <div>
      <div className="uni">
        <img src={imgUrl} alt={name} className="img" />
        <p>{name}</p>
        <p>{result}</p>
        <p>{status}</p>
      </div>
    </div>
  )
}

export default MatchCard
