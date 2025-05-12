console.log('Header.jsx file');

export default function Header() {

    console.log('Header Component Rendered')
    
    
    return (
        <header className="flex items-center justify-center bg-sky-900 text-white h-2/12">
            <h1 className='font-bold text-4xl uppercase'>App Header</h1>
        </header>
    )
}