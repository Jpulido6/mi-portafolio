import { SVGProps } from "react";

// export function LinkedinIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" {...props}><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"></circle><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path></svg>
//     )
// }


export function LinkedinIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
    )
  }