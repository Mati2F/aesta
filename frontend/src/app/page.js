import AreaChart from './components/AreaChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import LineChartReal from './components/LineChartReal';

export default function Home(){
  return(
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">

      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-16 text-center">
        Galería de gráficos
      </h1>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <GridItem title="Gráfico de Área">
          <AreaChart/>
        </GridItem>
          
        <GridItem title="Gráfico de Barras">
          <BarChart/>
        </GridItem>

        <GridItem title="Gráfico de Línea (Real)">
          <LineChartReal/>
        </GridItem>

        <GridItem title="Gráfico de Área">
          <AreaChart/>
        </GridItem>
          
        <GridItem title="Gráfico de Barras">
          <BarChart/>
        </GridItem>

        <GridItem title="Gráfico de Línea">
          <LineChart/>
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({title, children}){
  return(
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900
    bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}