import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formarCurrency } from "../helpers"

type OrderTotalProp =
{
   order: OrderItem[],
   tip: number,
   SaveOrder: () => void

}



export default function OrderTotal({order, tip, SaveOrder} : OrderTotalProp) {

  const Subtotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useMemo(() => Subtotal * tip, [tip, order])  
//los datos del corchetes del final "[tip order]" se refieren a cuando va a ejecutarse ese codigo, es decir cuando alguno de estos dos cambie esto va a accionarse
  const Total = useMemo(() => tipAmount + Subtotal, [tip, order])

  return (

    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propina:</h2>
            <p>
                Subtotal a pagar: {''}
                <span className="font-bold">{formarCurrency(Subtotal)}</span>
            </p>

            <p>
                Propina: {''}
                <span className="font-bold">{formarCurrency(tipAmount)}</span>
            </p>
            <p>
                Total a pagar: {''}
                <span className="font-bold">{formarCurrency(Total)}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
        disabled={Total===0}
        onClick={SaveOrder}>
            Guargar orden
            
        </button>
    </>


  )
}



