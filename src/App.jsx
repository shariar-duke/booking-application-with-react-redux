import Header from "./components/Header"
import backgroundImg from "./assets/Hero-Banner.webp"
import InputData from "./components/InputData"
export default function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the overlay color as needed
      }}
    >
      <Header />
      <div className="relative z-50 flex justify-center items-center h-[calc(90vh-80px)]">
        <div className="flex flex-col gap-[40px]">
          <InputData />
        </div>
      </div>
    </div>
  )
}