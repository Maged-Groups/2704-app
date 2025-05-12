
export default function LoadingFullScreen() {
    return (
        <div className='flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 bg-gray-900/70 text-white'>
            <div className='animate-spin w-24 h-24 rounded-full border-8 border-l-transparent border-amber-600'></div>
        </div>
    )
}
