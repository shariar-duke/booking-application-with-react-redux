import Header from "./components/Header"
import backgroundImg from "./assets/Hero-Banner.webp"
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

      <div className="relative ">
        <Header />
      </div>
    </div>
  )
}