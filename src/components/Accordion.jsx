import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionInfo = () => {

    
    return (
        <div className='flex justify-center mt-1 mb-5'>
        <div className='w-full xl:w-3/4 ml-5 mr-5'>
        
        <div className="flex flex-col items-center mt-10 mb-10">
        <p className="text-3xl font-semibold mb-3 text-center">
          ¿Tienes dudas o preguntas? ¡Soluciona TUS dudas!
        </p>
        </div>
        
        
        <Accordion allowZeroExpanded>
            <AccordionItem >
                <AccordionItemHeading >
                {/* Membresía PEV */}
                    <AccordionItemButton className='bg-cmrbolsa p-4 hover:bg-gris text-2xl font-bold text-white hover:text-black ' >                    
                    ¿Que es la Formación PEV?
                    </AccordionItemButton>
                </AccordionItemHeading>
                        <AccordionItemPanel >
                        <ul className='list-none pl-4 space-y-2 ml-5'>
                        <p>Es un programa de formación donde aprendes “desde cero o avanzado”, a través del conocimiento del movimiento del precio, el volumen y su estructura (PEV) </p>
                        <li className='list-disc'>En la forma PEV <strong>puedes empezar desde cero</strong>, es decir, no necesitas conocimientos previso para empezar ya que puedes empezar por el módulo básico.</li>
                        <li className='list-disc'>El <strong>curso PEV</strong> (curso principal) <strong>tiene tres módulos y cada uno tiene lecciones y ejercicios a realizar</strong> para que vayas avanzando consistentemente a tu ritmo.</li>
                        <li className='list-disc'><strong>No es aconsejable saltarse lecciones</strong>, vete paso a paso entendiendo cada lección, eso te llevará a la comprensión total del mercado.</li>
                        <li className='list-disc'>Es <strong>para personas con poco o mucho tiempo disponible </strong>ya que el ritmo lo llevas tú segú te programes.</li>
                        </ul>
                        
                        </AccordionItemPanel>
            </AccordionItem>
                <AccordionItem >
                <AccordionItemHeading >
                {/* Curso PEV */}
                    <AccordionItemButton className='bg-cmrbolsa p-4 hover:bg-gris text-2xl font-bold text-white hover:text-black ' >                    
                    ¿Que incluye el CURSO PEV?
                    </AccordionItemButton>
                </AccordionItemHeading>
                    <AccordionItemPanel >
                    <ul className='list-none pl-4 space-y-2 ml-5'>
                    <p>Toda la formación incluye el curso básico de bolsa, el curso pev y el curso del graficador NinjaTrader8, <strong>los tres cursos son on line y no tienen soporte</strong></p>
                    <li className='list-disc'>En el CURSO BÁSICO y CURSO PEV <strong>las lecciones están encadenadas</strong>, es decir, empezarás de menos a más conocimiento pero <strong>podrás ir a la velocidad que desees</strong>.</li>
                    <li className='list-disc'>En el <strong> CURSO de NINJATRADER8</strong> podrás ver las lecciones salteadas según sea tu nivel en esa plataforma. Incluye un método para que tengas la plataforma gratuita para graficar no para operar.</li>
                    <li className='list-disc'>Tendrás <strong>todos los cursos disponible 12 meses</strong> empezando desde 23 DICIEMBRE 2024 hasta el 31 Diciembre de 2025, así que podrás disfrutarlo y verlo tantas veces quieras durante más de 12 meses.</li>
                    </ul>
                    
                    </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading >
                {/* Mentoría PEV */}
                <AccordionItemButton className='bg-cmrbolsa p-4 hover:bg-gris text-2xl font-bold text-white hover:text-black ' >                    
                    ¿Otras cuestiones?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    <ul className='list-none pl-4 space-y-2 ml-5'>
                    <p>Para empezar <strong>no necesitas conocimientos previos </strong>, puedes comprarlo ahora y empezar cuando quieras a partir del 23 de DICIEMBRE 2024</p>
                    <li className='list-disc'>Tendrás <strong>disponible el curso BÁSICO y el CURSO de NINJATRADER8 </strong> una vez entres y el 23 de DICIEMBRE 2024 el CURSO PEV.</li>
                    
                    <li className='list-disc'>Esta formación no tiene soporte. Si deseas tener soporte ponte en contacto conmigo por, <strong> whatsApp, email o cualquier red social</strong> y decidiremos juntos la formación que se puede adaptar a tí.</li>
                    <li className='list-disc'>Cualquier OTRA duda puedes <strong>enviarme un whatsApp y te atenderé personalmente.</strong></li>
                    </ul>
                    
                    </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
         {/* LOGO */}
      <div className="mb-5 bg-cover bg-center bg-no-repeat">
        <img
          className="mt-10 mb-4 mx-auto w-1/3 sm:w-1/12"
          src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png"
          alt="logo Cmrbolsa"
        />
      </div>
        </div>
        </div>
    );
}

export default AccordionInfo;
