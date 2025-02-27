import { useEffect, useState } from "react"
import "./ShelterForm.css"

function ShelterForm({ onAdd }) {
   const [tempStorage, setTempStorage] = useState({
      food: "",
      vaccine: "",
      pills: "",
   })

   const [disable, setDisable] = useState(true)

   const handleStorage = (e) => {
      const source = e.target.name
      switch (source) {
         case "food": {
            setTempStorage({ ...tempStorage, food: e.target.value })
            break
         }
         case "vaccine": {
            setTempStorage({ ...tempStorage, vaccine: e.target.value })
            break
         }
         case "pills": {
            setTempStorage({ ...tempStorage, pills: e.target.value })
            break
         }

         default:
            break
      }
   }
   //    const handleStorage = (e)=>{
   //     setTempStorage({...tempStorage, [e.target.name]: e.target.value})
   //    } vyssi divci toho predesleho(dynamicke prirazovani promenne)

   useEffect(() => {
      const temp =
         (tempStorage.food === "" || tempStorage.food <= 0) &&
         (tempStorage.vaccine === "" || tempStorage.vaccine <= 0) &&
         (tempStorage.pills === "" || tempStorage.pills <= 0)

      setDisable(temp)
   }, [tempStorage])

   const handleClick = () => {
      const storageToSend = {
         food: tempStorage.food ==="" ? 0 : parseInt(tempStorage.food),
         vaccine: tempStorage.vaccine === "" ? 0 : parseInt(tempStorage.vaccine),
         pills: tempStorage.pills === "" ? 0 : parseInt(tempStorage.pills),
      }
      onAdd(storageToSend)
      setTempStorage({
         food: "",
         vaccine: "",
         pills: ""
      })
   }

   return (
      <div className="shelter-form">
         <input
            type="number"
            name="food"
            min={0}
            placeholder="granule(kg)"
            value={tempStorage.food}
            onChange={handleStorage}
         />
         <input
            type="number"
            name="vaccine"
            min={0}
            placeholder="vakciny(ks)"
            value={tempStorage.vaccine}
            onChange={handleStorage}
         />
         <input
            type="number"
            name="pills"
            min={0}
            placeholder="medikamenty(ks)"
            value={tempStorage.pills}
            onChange={handleStorage}
         />
         <button disabled={disable} onClick={handleClick}>
            Dopln zasoby
         </button>
      </div>
   )
}

export default ShelterForm
