import "./Toggler.css"

function Toggler({ onChoose, active }) {
   const handleClick = (e) => {
      onChoose(e.target.name)
   }

   return (
      <div className="page-toggler">
         <button
            className={`toggler-btn ${active === 1 ? `active` : ""}`}
            onClick={handleClick}
            name="list-of-dogs"
         >
            Seznam psu
         </button>
         <button
            className={`toggler-btn ${active === 2 ? `active` : ""}`}
            onClick={handleClick}
            name="shelter-storage"
         >
            Sklad utulku
         </button>
      </div>
   )
}

export default Toggler
