import { FaCheck } from "react-icons/fa"


// const handleCharlaClick = () => {
//   window.location.href = 'https://mentoriapev.com/finalizar-compra/?add-to-cart=5910';
// };

const handleTallerClick = () => {
  window.location.href = 'https://mentoriapev.com/finalizar-compra/?add-to-cart=5957';
};

const PreciosBlackFriday = () => {
  return (
    <>
      <div className="md:mt-7 ">
        
      </div>

      <div className="md:flex md:flex-row md:justify-center md:gap-5 flex flex-col gap-5 md:ml-16 md:mr-16 ml-5 mr-5 ite">

 
        {/* Segunda tabla */}
        <div className="border-2 border-white">
        <div className="border-2 border-black">
        <div className="">
            <h1 className="flex justify-center items-center font-semibold text-white bg-cmrbolsa md:text-2xl text-lg text-center p-1">
            El CURSO donde APRENDERAS todo el PEV
            </h1>
            <h5 className="text-lg bg-cmrbolsa text-white md:h-9 h-20 p-2 md:pb-9 text-center">
            Precio habitual <span className="font-bold text-xl"> 981 €</span> + impuestos (1187 €)</h5>

            <div className="flex flex-col text-center">
            <h2 className="text-2xl font-bold text-white mt-5">Ahora con el <span className="underline">75%  de descuento</span></h2>
            <h2 className="md:text-7xl text-5xl font-bold text-white text-center">
                296,75 €
            </h2>
            <h5 className="text-xlfont-semibold w-full mx-auto text-center text-white bg p-1">
                Impuestos incluidos</h5>
            </div>

            <h5 className="mt-1 font-semibold w-full text-center">
            <h5 className="text-xl font-semibold w-full mx-auto text-center bg-white bg p-1">
                Los 3 primeros SOLO 257 €</h5>
            </h5>
            

        </div>
        </div>

          <div className="flex flex-col items-center md:gap-5 gap-2">
            <h5 className="text-2xl text-white font-semibold bg-cmrbolsa w-full md:p-2 text-center">¿Qué incluye?</h5>
            <h3 className="flex text-white font-bold md:text-xl items-center md:gap-2 gap-1"><FaCheck />Curso básico de bolsa (48 lecciones)</h3>
            <h3 className="flex text-white font-bold md:text-xl items-center md:gap-2 gap-1"><FaCheck /> Curso avanzado PEV (59 lecciones)</h3>
            <h3 className="flex text-white font-bold md:text-xl items-center md:gap-2 gap-1"><FaCheck />12 meses disponible</h3>

            <button onClick={handleTallerClick} className="boton_reserva bg-cmrbolsa uppercase">
              Me apunto
            </button>

          </div>
        </div>
      </div>
    
    </>
  );
};

export default PreciosBlackFriday;
