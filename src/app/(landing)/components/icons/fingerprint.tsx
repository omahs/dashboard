type Props = {
  className?: string;
};

export default function Fingerprint({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
    >
      <g clipPath="url(#fingerprint_a)">
        <path
          fill="#E6D5FA"
          d="M0 10.244C0 4.586 4.586 0 10.244 0h21.512C37.414 0 42 4.586 42 10.244v21.512C42 37.414 37.414 42 31.756 42H10.244C4.586 42 0 37.414 0 31.756V10.244Z"
        />
        <g fill="#771AC9" clipPath="url(#fingerprint_b)">
          <path d="M10.448 34.329a.906.906 0 0 1-.694-.258.889.889 0 0 1-.26-.688V17.312a9.84 9.84 0 0 1 2.925-6.936 10.04 10.04 0 0 1 7.005-2.897h3.152a10.04 10.04 0 0 1 7.005 2.897 9.84 9.84 0 0 1 2.926 6.936v4.16c0 .25-.1.49-.28.668a.96.96 0 0 1-1.35 0 .94.94 0 0 1-.28-.669v-4.16a7.949 7.949 0 0 0-2.363-5.601 8.11 8.11 0 0 0-5.658-2.34h-3.152a8.11 8.11 0 0 0-5.658 2.34 7.949 7.949 0 0 0-2.363 5.602v16.071c0 .251-.1.492-.28.669a.96.96 0 0 1-.675.277Z" />
          <path d="M23.721 26.198a.906.906 0 0 1-.694-.258.889.889 0 0 1-.26-.687V18.73a1.481 1.481 0 0 0-.442-1.075 1.508 1.508 0 0 0-1.086-.438h-.382a1.523 1.523 0 0 0-1.086.438 1.493 1.493 0 0 0-.442 1.075v6.523c0 .25-.1.491-.28.669a.96.96 0 0 1-1.35 0 .941.941 0 0 1-.28-.669V18.73a3.364 3.364 0 0 1 1.004-2.41 3.431 3.431 0 0 1 2.434-.994h.382a3.459 3.459 0 0 1 2.433.994 3.391 3.391 0 0 1 1.004 2.41v6.523a1.017 1.017 0 0 1-.299.65 1.036 1.036 0 0 1-.655.296Z" />
          <path d="M21.907 30.642h-1.719c-.91-.011-1.81-.2-2.645-.557a6.885 6.885 0 0 1-2.225-1.523 7.07 7.07 0 0 1-1.91-3.97.937.937 0 0 1 .244-.731.954.954 0 0 1 .711-.31c.234.01.457.101.631.257a1 1 0 0 1 .324.594c.159 1.1.66 2.125 1.432 2.93a4.98 4.98 0 0 0 3.438 1.514h1.719a4.815 4.815 0 0 0 1.876-.407 4.775 4.775 0 0 0 1.562-1.106 5.34 5.34 0 0 0 1.432-3.782v-5.294a5.987 5.987 0 0 0-1.432-3.782 4.98 4.98 0 0 0-3.438-1.512h-1.719a4.814 4.814 0 0 0-1.876.407c-.59.26-1.122.636-1.562 1.105a5.34 5.34 0 0 0-1.432 3.782c0 .25-.1.491-.28.668a.96.96 0 0 1-1.35 0 .94.94 0 0 1-.28-.668 6.934 6.934 0 0 1 .496-2.704 6.99 6.99 0 0 1 1.51-2.307 6.685 6.685 0 0 1 2.217-1.538 6.743 6.743 0 0 1 2.653-.542h1.623c.91.011 1.81.2 2.645.557a6.888 6.888 0 0 1 2.225 1.523 7.382 7.382 0 0 1 2.005 5.011v5.294a6.934 6.934 0 0 1-.495 2.704 6.988 6.988 0 0 1-1.51 2.307A6.685 6.685 0 0 1 24.56 30.1a6.741 6.741 0 0 1-2.652.542Z" />
        </g>
      </g>
      <defs>
        <clipPath id="fingerprint_a">
          <path fill="#fff" d="M0 0h42v42H0z" />
        </clipPath>
        <clipPath id="fingerprint_b">
          <path fill="#fff" d="M9.493 7.48h23.014v26.848H9.493z" />
        </clipPath>
      </defs>
    </svg>
  );
}
