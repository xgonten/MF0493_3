export function SobreMi() {
  return (
    <div className="flex flex-col justify-between">
      <div className="p-4 rounded">
        <h4 className="flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-gray-900 uppercase font-montserrat">
          SOBRE MÍ
        </h4>
        <div className="flex items-end justify-end gap-10 font-medium text-gray-900 font-montserrat">
          <div className="flex flex-col items-start justify-end w-2/3 gap-6 pt-10">
            <p>
              Soy Daniel González, graduado en psicología y máster en neurociencia. Actualmente
              formándome en Desarrollo de Aplicaciones con Tecnologías Web, con
              el objetivo de encontrar nuevas oportunidades laborales como
              programador o desarrollador web y trabajar en el sector tecnológico.
            </p>           
            <p>
              Soy organizado, responsable, con capacidad comunicativa y de
              trabajo en equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
