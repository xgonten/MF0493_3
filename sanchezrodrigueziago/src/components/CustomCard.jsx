import "../css/CustomCard.css"
import { useUser } from "../Hooks/useUser"

function CustomCard({card}) {

    console.log(card)

    const { user } = useUser()

    return (
      <>
        <div className="card" style={{ backgroundImage: `url(${JSON.stringify(card.data.img)})` }}>
        {user && <button className="delete-btn">X</button>}
          <div>
            <h2>{JSON.stringify(card.data.titulo)}</h2>
            <p>
              {JSON.stringify(card.data.desc)}
            </p>
          </div>
        </div>
      </>
    )
  }
  
  export default CustomCard