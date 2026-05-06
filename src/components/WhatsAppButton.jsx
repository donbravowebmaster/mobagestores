export default function WhatsAppButton() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '528181234567'
  const waLink = `https://wa.me/${whatsappNumber}?text=Hola%2C%20me%20interesa%20información%20sobre%20asesoría%20en%20trámites%20federales`
  
  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" 
      className="fixed bottom-5 right-5 z-50 bg-green text-white rounded-full p-4 shadow-lg hover:shadow-xl transition">
      WhatsApp
    </a>
  )
}
