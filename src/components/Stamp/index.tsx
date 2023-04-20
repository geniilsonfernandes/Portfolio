import React from 'react'

const Stamp = () => {
  return (
    <svg
      width="59"
      height="73"
      viewBox="0 0 59 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1014_209)">
        <path
          d="M6 3C6 1.89543 6.89543 1 8 1H47C48.1046 1 49 1.89543 49 3V55.9946C49 57.4232 47.5455 58.3911 46.2277 57.8395L28.2723 50.3233C27.7782 50.1165 27.2218 50.1165 26.7277 50.3233L8.77227 57.8395C7.4545 58.3911 6 57.4232 6 55.9946V3Z"
          fill="url(#paint0_linear_1014_209)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1014_209"
          x="0"
          y="0"
          width="59"
          height="72.9967"
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
          <feOffset dx="2" dy="7" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1014_209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1014_209"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1014_209"
          x1="3"
          y1="-10"
          x2="54"
          y2="66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14B8A6" />
          <stop offset="1" stopColor="#DE69E8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Stamp
