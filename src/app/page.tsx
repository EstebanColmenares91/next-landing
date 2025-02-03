import AppsList from "@/components/AppsList";
// import { getProductsFilteredByTitle } from "@/service";
import { ThemeProvider } from "./provider/ThemeProvider";
import { DarkModeToggle } from "@/components/DarkMode";
import { tituloPagina } from "@/lib/title";

import data from '../lib/data.json'


export default async function Home()  {
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-background">
        <h1 className="text-2xl font-bold">{tituloPagina}</h1>
        <DarkModeToggle />
      </header>
      <main className="flex-grow p-4 pb-20">
        <AppsList initialProducts={data.data} />
      </main>
    </div>
  </ThemeProvider>
  )
}
