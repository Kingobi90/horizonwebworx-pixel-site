export default function CRTEffect() {
  return (
    <>
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 z-[999] pointer-events-none animate-flicker opacity-97">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 0, 0, 0.02), rgba(255, 0, 0, 0.06))',
            backgroundSize: '100% 2px, 3px 100%'
          }}
        />
      </div>
      
      {/* Scanlines */}
      <div 
        className="fixed inset-0 z-[998] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)'
        }}
      />
    </>
  );
}
