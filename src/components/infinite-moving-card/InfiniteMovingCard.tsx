
export const InfiniteMovingCards = ({
    items
}: {
    items: string[];
}) => {

    return (
        <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.technologies;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        ><ul x-ref="technologies" className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
                {
                    items.map((item, index) => (
                        <li key={index}
                            className="  border-slate-700 p-2"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                            }}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};


