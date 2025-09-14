// src/components/Loading.jsx
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-blue-800 font-medium">Loading Portfolio...</p>
      </div>
    </div>
  )
}

export default Loading