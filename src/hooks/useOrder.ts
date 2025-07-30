import { useState } from "react"
import type { menuItem, OrderItem } from "../types"



export default function useOrder()
{

    const [order, setOrder]= useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)


    const addItem = (item: menuItem) =>{
       
        const itemExist = order.find(orderItem => orderItem.id === item.id)


        if (itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        }
        else{
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }

  
    }

    const removeItem = (id : menuItem['id']) => {
       setOrder(prevOrder =>
            prevOrder.map(item => {
            // Si el item coincide con el id y tiene más de una cantidad, le restamos uno
            if (item.id === id && item.quantity) {
                return {
                ...item,
                quantity: item.quantity - 1
                }
            }
            return item
            }).filter(item => item.id !== id || item.quantity > 0) // eliminamos si quantity queda en 0
        )
    }

    function SaveOrder()
    {
        setOrder([])
        setTip(0)
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        SaveOrder
    }
}