console.log('P404.jsx file');

function P404() {
      console.log('P404 Component rendered');

    return (
        <div className="flex flex-col items-center justify-center  bg-gray-50 p-4">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
                <p className="text-gray-500">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <a
                    href='/'
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Go Back
                </a>
            </div>
        </div>
    );
}

export default P404;