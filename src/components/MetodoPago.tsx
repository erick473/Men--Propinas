

type Pagos =
{
    PagoDigital: () => void
}

export default function MetodoPago({PagoDigital}: Pagos) {
  
  



  
    return (


   <div className="flex flex-col items-center border-t border-gray-200 py-5 last-of-type:border-b text-center">
  <h3 className="text-2xl font-black mb-6">Método de pago</h3>
  <div className="flex gap-4">
    <button className="bg-black p-3 uppercase text-white font-bold disabled:opacity-10" 
    onClick={PagoDigital}>
      Pago con tarjeta
    </button>
    <button className="bg-black p-3 uppercase text-white font-bold disabled:opacity-10">
      Pago en efectivo
    </button>
  </div>
</div>

     
   
  )

}
