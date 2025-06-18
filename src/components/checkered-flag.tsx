


export default function CheckeredFlag({ className }: { className?: string }) {
    return (
            <div className={`w-full h-72 -z-10 grid grid-cols-8 grid-rows-2 absolute top-0 left-0 right-0 ${className}`}>
                {[...Array(16)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`${i % 2 === Math.floor(i / 8) % 2 ? 'bg-white' : 'bg-black'}`}
                    />
                ))}
            </div>
    )
}