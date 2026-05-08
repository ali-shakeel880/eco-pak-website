export default function Careers() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-600 mb-8">Careers</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Environmental Engineer</h3>
          <p className="text-gray-600 mb-4">
            We are seeking an experienced Environmental Engineer to join our consulting team.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-medium">Full Time</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Laboratory Technician</h3>
          <p className="text-gray-600 mb-4">
            Join our laboratory team as a skilled technician for environmental testing services.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-medium">Full Time</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}