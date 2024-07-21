export const Card = ({

    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20"}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({

    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={"text-zinc-100 font-bold tracking-wide mt-4"}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <span className="w-full flex items-center justify-center">
            {children}
        </span>
    );
};