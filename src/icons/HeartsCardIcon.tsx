import type { IconProps } from "../types/app";

export default function HeartsCardIcon({ className }: IconProps) {
  return (
    <svg
      width="32"
      height="45"
      viewBox="0 0 32 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.5" filter="url(#filter0_d_931_1274)">
        <mask id="path-1-inside-1_931_1274" fill="white">
          <rect x="0.585938" width="29.8448" height="43.1579" rx="1.75205" />
        </mask>
        <rect
          x="0.585938"
          width="29.8448"
          height="43.1579"
          rx="1.75205"
          stroke="white"
          strokeWidth="3.51115"
          shapeRendering="crispEdges"
          mask="url(#path-1-inside-1_931_1274)"
        />
        <path
          d="M16.5959 16.9412C18.2688 15.2683 20.9812 15.2683 22.6541 16.9412C24.327 18.6141 24.327 21.3265 22.6541 22.9994L15.5128 30.1406L9.45466 24.0824L16.5959 16.9412Z"
          fill="white"
        />
        <path
          d="M14.4236 16.9412C12.7507 15.2683 10.0384 15.2683 8.36544 16.9412C6.69253 18.6141 6.69253 21.3265 8.36544 22.9994L15.5067 30.1406L21.5649 24.0824L14.4236 16.9412Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_931_1274"
          x="0.000744998"
          y="0"
          width="31.0141"
          height="44.3286"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.585193" />
          <feGaussianBlur stdDeviation="0.292596" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_931_1274"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_931_1274"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
