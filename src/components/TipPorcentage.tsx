


const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]


type TipPorcentageProp =
{
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}



export default function TipPorcentage({setTip, tip}: TipPorcentageProp) {
  return (
    <div>
        <h3 className="font-black text-2xl"> Propina: </h3>
        <form>
            {tipOptions.map(tipOpc => (
                <div key={tipOpc.id} className="flex gap-2">
                   <label htmlFor={tipOpc.id}>{tipOpc.label}</label> 
                   <input id={tipOpc.id} type="radio" name="tip" value={tipOpc.value}
                   onChange={e => setTip(+e.target.value)}
                   checked={tipOpc.value === tip}/>
                </div>
        
            ))}
       

        </form>
    </div>
  )
}
