import ImageEditor from './components/ImageEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #666 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main content */}
      <main className="relative z-10 p-8">
        <h1>Editor de Imágenes Básico</h1>
        <ImageEditor />
      </main>
    </div>
  );
}

export default App;