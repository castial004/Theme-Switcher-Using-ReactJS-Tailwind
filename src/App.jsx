import Button from './Components/Button'
import Card from './Components/Card'
import ThemeContextProvider from './Contexts/ThemeContextProvider'

function App() {
  return (
    <ThemeContextProvider>
      <div className="h-screen w-full dark:bg-gray-950 bg-gray-100 flex flex-col justify-center items-center">
        <Card />
        <Button />
      </div>
    </ThemeContextProvider>
  )
}

export default App
