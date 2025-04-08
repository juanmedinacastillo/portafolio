import React, { useState } from 'react';

const Work = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleProjects = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Mi portafolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Mis ultimos Proyectos</h2>

      <div className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 my-10 dark:text-black`}>
        {/* Primeros 3 proyectos */}
        <div
          className="aspect-square bg-[url('./assets/work-01.jpg')] bg-no-repeat md:hover:bg-[auto_350px] bg-cover bg-center rounded-lg relative cursor-pointer transition-all transition-all duration-600 ease-in-out"
        >
          <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 md:hover:bottom-7">
            <div>
              <h2 className="text-center ont-bold">Especialista en Materiales</h2>
              <p className="text-center text-sm text-gray-700">Mejoramiento de Sistema de Riego</p>
              <p className="text-center text-sm text-gray-700">Tayapac - Ancash</p>
              <p className="text-center text-sm text-gray-700">2019</p>
            </div>
          </div>
        </div>

        <div
          className="aspect-square bg-[url('./assets/work-02.jpg')] bg-no-repeat md:hover:bg-[auto_350px] bg-cover bg-center rounded-lg relative cursor-pointer transition-all transition-all duration-600 ease-in-out"
        >
          <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 md:hover:bottom-7">
            <div>
              <h2 className="text-center ont-bold">Especialista de Calidad</h2>
              <p className="text-center text-sm text-gray-700">Pistas y Veredas en urb. Las Begonias</p>
              <p className="text-center text-sm text-gray-700">Jaén</p>
              <p className="text-center text-sm text-gray-700">2021</p>
            </div>
          </div>
        </div>

        <div
          className="aspect-square bg-[url('./assets/work-03.jpg')] bg-no-repeat md:hover:bg-[auto_350px] bg-cover bg-center rounded-lg relative cursor-pointer transition-all transition-all duration-600 ease-in-out"
        >
          <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 md:hover:bottom-7">
            <div>
              <h2 className="text-center ont-bold">Ingeniero de Calidad</h2>
              <p className="text-center text-sm text-gray-700">Terminal Terrestre de Puerto Malabrigo</p>
              <p className="text-center text-sm text-gray-700">Ascope - La Libertad</p>
              <p className="text-center text-sm text-gray-700">2022</p>
            </div>
          </div>
        </div>

        {/* Proyectos adicionales que se muestran al hacer clic en "Ver más" */}
        {showMore && (
          <>
            <div
              className="aspect-square bg-[url('./assets/work-04.jpg')] bg-no-repeat md:hover:bg-[auto_350px] bg-cover bg-center rounded-lg relative cursor-pointer transition-all transition-all duration-600 ease-in-out"
            >
              <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 md:hover:bottom-7">
                <div>
              <h2 className="text-center ont-bold">Especialista en Materiales</h2>
              <p className="text-center text-sm text-gray-700">Puesto de Salud en Pichiuc</p>
              <p className="text-center text-sm text-gray-700">Ancash</p>
              <p className="text-center text-sm text-gray-700">2023</p>
            </div>
              </div>
            </div>

            <div
              className="aspect-square bg-[url('./assets/work-05.jpg')] bg-no-repeat bg-left md:hover:bg-[auto_350px] bg-cover bg-center rounded-lg relative cursor-pointer transition-all transition-all duration-600 ease-in-out"
            >
              <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 md:hover:bottom-7">
                <div>
              <h2 className="text-center ont-bold">Especialista en Calidad</h2>
              <p className="text-center text-sm text-gray-700">Modernización Turística en <br></br>Chan Chan</p>
              <p className="text-center text-sm text-gray-700">Trujillo - La Libertad</p>
              <p className="text-center text-sm text-gray-700">2024</p>
            </div>
              </div>
            </div>

            <div
              className="aspect-square bg-[url('./assets/work-06.jpg')] bg-no-repeat md:hover:bg-[auto_350px] bg-cover bg-center rounded-lg relative cursor-pointer transition-all transition-all duration-600 ease-in-out"
            >
              <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 md:hover:bottom-7">
                <div>
              <h2 className="text-center ont-bold">Especialista en Control de Calidad</h2>
              <p className="text-center text-sm text-gray-700">Nueva Sede del Gobierno Regional</p>
              <p className="text-center text-sm text-gray-700">Trujillo - La Libertad</p>
              <p className="text-center text-sm text-gray-700">2025</p>
            </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Botón "Ver más/Ver menos" */}
      <a
        onClick={handleToggleProjects}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#22cb95] duration-500 dark:text-white dark:border-white dark:hover:bg-[#22cb95] cursor-pointer"
      >
        {showMore ? 'Ver menos' : 'Ver más'}
      </a>
    </div>
  );
};

export default Work;
