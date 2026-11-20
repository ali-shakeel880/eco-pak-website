import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
      <div>
        <p className="text-green-600 font-semibold mb-2">404</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for may have moved. Try one of these:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700">Home</Link>
          <Link to="/services/environmental-laboratory" className="border border-green-600 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50">Laboratory Services</Link>
          <Link to="/services/environmental-consultancy" className="border border-green-600 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50">Consultancy</Link>
          <Link to="/contact" className="border border-green-600 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50">Contact</Link>
        </div>
      </div>
    </section>
  );
}
