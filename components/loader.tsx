import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image 
                alt="loader"
                fill
                src="/loader.png"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Sally is thinking...
            </p>
        </div>
    )
};