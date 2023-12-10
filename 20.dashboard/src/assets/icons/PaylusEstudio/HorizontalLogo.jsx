import COLORS from './colors.js'

export default function HorizontalLogo ({ className, tagline, darkmode, ...restProps }) {
  const color = COLORS[darkmode ? 'dark' : 'light']
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 374.4 130.5'
      {...restProps}
    >
      <path
        fill={color.primary.hex}
        d='M55.3 126.8c0 .1-.1.2-.1.2-1.7 3.6-6.4 4.6-9.5 2-12.7-10.6-24.5-22.3-35.3-34.9-1.4-1.6-2.7-3.2-4.1-4.8-1.7-2.1-3.4-4.2-5-6.3-1.7-2.2-1.7-5.4 0-7.6 1.6-2.1 3.3-4.2 5-6.3 1.3-1.6 2.7-3.2 4.1-4.8C21.2 51.6 33 40 45.8 29.3c2.4-2 6.1-1.9 8.3.4l.1.1c2.5 2.6 2.3 6.7-.4 9-13 10.8-24.9 22.7-35.7 35.5-.8.9-1.6 1.9-2.4 2.9a3.3 3.3 0 000 4c.8 1 1.6 1.9 2.4 2.9 10.8 12.8 22.7 24.7 35.6 35.5 2.1 1.7 2.8 4.7 1.6 7.2z'
      />
      <path
        fill={color.background1.hex}
        d='M58.5 114.3c0 .4-.1.8-.1 1.2l-6-5.1c-.4-8.6-4.6-16.8-11.5-22-1.8-1.4-3.8-2.6-5.9-3.5-4.2-2-7.8-5-10.5-8.7l4.2-4.8c2.4 3.5 5.7 6.4 9.6 8.1 4.1 2 7.9 4.7 11 8.2 6.5 6.9 10 17.1 9.2 26.6z'
      />
      <path
        fill={color.primary.hex}
        d='M75.1 126.8c0 .1.1.2.1.2 1.7 3.6 6.4 4.6 9.5 2 12.7-10.7 24.5-22.3 35.3-34.9 1.4-1.6 2.7-3.2 4.1-4.8 1.7-2.1 3.4-4.2 5-6.3 1.7-2.2 1.7-5.4 0-7.6-1.6-2.1-3.3-4.2-5-6.3-1.3-1.6-2.7-3.2-4.1-4.8-10.8-12.6-22.6-24.3-35.4-35-2.4-2-6.1-1.9-8.3.4l-.1.1c-2.5 2.6-2.3 6.7.4 9 12.9 10.8 24.8 22.7 35.6 35.6.8.9 1.6 1.9 2.4 2.9.9 1.2.9 2.8 0 4-.8 1-1.6 1.9-2.4 2.9a291.17 291.17 0 01-35.6 35.5c-2 1.6-2.6 4.6-1.5 7.1z'
      />
      <path
        fill={color.background1.hex}
        d='M17.3 8.4c-.7 5-1 10.1-.9 15.3.1 7.5 1 14.9 2.6 22-1.7 1.8-3.4 3.5-5.1 5.3-1.7-6.2-2.8-12.7-3.4-19.4C9 40.5 7.7 49.6 7 58.8c-2.3 2.6-4.5 5.3-6.7 8C1.3 45.3 5 24.5 10.8 4.6c.2-.8.5-1.5.7-2.3.6-2.1 2.7-2.9 4.6-1.8l2.1 1.2c.1 0 .1.1.2.1 9.7 5.7 18.8 12.3 27.1 19.8-1.6 1.3-3.2 2.6-4.8 4-7.2-6.5-15.1-12.2-23.4-17.2zM113.1 8.4c.7 5 1 10.1.9 15.3-.1 7.5-1 14.9-2.6 22 1.7 1.8 3.4 3.5 5.1 5.3 1.7-6.2 2.8-12.7 3.4-19.4 1.7 8.9 2.9 18 3.6 27.1 2.3 2.6 4.5 5.3 6.7 8-1-21.5-4.7-42.3-10.5-62.2-.2-.8-.5-1.5-.7-2.3-.6-2.1-2.7-2.9-4.6-1.8l-2.1 1.2c-.1 0-.1.1-.2.1C102.4 7.4 93.3 14 85 21.5c1.6 1.3 3.2 2.6 4.8 4 7.2-6.4 15-12.1 23.3-17.1zM71.9 114.3c0 .4.1.8.1 1.2l6-5.1c.4-8.6 4.6-16.8 11.5-22 1.8-1.4 3.8-2.6 5.9-3.5 4.2-2 7.8-5 10.5-8.7l-4.2-4.8C99.3 75 96 77.8 92 79.6c-4.1 2-7.9 4.7-11 8.2-6.4 6.8-9.9 17-9.1 26.5z'
      />
      <g>
        <path
          fill={color.background1.hex}
          d='M166 87.8V42.9h20.7c3.5 0 6.3.7 8.5 2s3.9 3.1 5 5.4c1.1 2.3 1.6 4.9 1.6 7.8 0 3-.6 5.6-1.9 7.9-1.3 2.3-3 4.1-5.4 5.3-2.3 1.3-5 1.9-8.2 1.9h-11.2v14.5H166zm9.2-21.9h9.3c2.7 0 4.7-.7 6-2.1 1.3-1.4 2-3.3 2-5.7 0-2.6-.6-4.5-1.9-5.9-1.3-1.3-3.2-2-5.8-2h-9.6v15.7zM217.2 87.8c-2.1 0-4-.4-5.7-1.1-1.8-.8-3.2-1.9-4.3-3.4-1.1-1.5-1.6-3.4-1.6-5.6 0-3.2 1.1-5.8 3.4-7.7 2.3-1.9 5.6-2.9 10.1-2.9h9.6v-.9c0-2-.6-3.4-1.7-4.3-1.1-.8-3.4-1.2-6.8-1.2-3.7 0-7.3.6-10.7 1.7V56c1.5-.6 3.4-1.1 5.5-1.5 2.2-.4 4.5-.6 7.1-.6 4.9 0 8.7 1 11.4 3 2.7 2 4 5.2 4 9.6v21.3h-7.9l-.6-3.6c-1.3 1.1-2.9 2-4.7 2.7-1.9.6-4.2.9-7.1.9zm2.6-6.1c2.1 0 3.8-.3 5.4-1 1.5-.7 2.7-1.6 3.6-2.6V73h-9.4c-3.6 0-5.4 1.5-5.4 4.5-.1 2.8 1.8 4.2 5.8 4.2zM251.8 99.2c-1.4 0-2.7-.1-3.8-.2-1.1-.2-2.2-.4-3.2-.9v-6.5c.8.3 1.5.5 2.2.5.7.1 1.3.1 2 .1 1.9 0 3.3-.4 4.4-1.3 1-.9 2.1-2.3 3.1-4.4l-14.9-32.7h9.7l9.8 22.8 9.8-22.8h9.6l-13.1 30.9c-1.2 2.8-2.5 5.3-3.9 7.5s-3 3.9-4.9 5c-1.9 1.4-4.1 2-6.8 2zM295.8 87.8c-3.2 0-5.5-.7-6.9-2.2-1.4-1.5-2.2-3.8-2.2-7V42.7h9.3v35.2c0 1.1.2 1.9.7 2.4.5.4 1.1.7 2 .7 1.2 0 2.3-.2 3.2-.5v6.4c-1.7.6-3.8.9-6.1.9zM318.9 87.8c-3.9 0-6.9-1.1-9.1-3.3-2.2-2.2-3.3-5.4-3.3-9.6v-21h9.3v20.9c0 2.2.5 3.8 1.6 4.8s2.6 1.5 4.7 1.5c1.6 0 3.1-.3 4.4-1 1.3-.6 2.5-1.4 3.5-2.4V53.9h9.3v33.9h-8.5l-.4-3.8c-1.4 1.1-3 2-4.8 2.7-2 .8-4.2 1.1-6.7 1.1zM360 87.8c-2.4 0-4.7-.2-6.9-.5s-4-.8-5.3-1.3v-7.7c1.6.6 3.4 1.1 5.4 1.5 2 .3 3.9.5 5.6.5 2.3 0 3.9-.1 4.8-.4.9-.3 1.4-.9 1.4-1.9 0-1.1-.7-1.9-2.2-2.4-1.4-.5-3.6-1.2-6.4-2.1-3-1-5.3-2.2-6.9-3.6-1.6-1.4-2.4-3.5-2.4-6.3 0-3.1 1.1-5.5 3.4-7.2 2.3-1.7 5.9-2.5 10.9-2.5 2 0 3.9.1 5.7.4 1.8.3 3.3.7 4.5 1.1V63c-1.2-.6-2.7-1-4.3-1.3-1.6-.3-3.1-.4-4.5-.4-2 0-3.5.1-4.7.4-1.2.3-1.7.9-1.7 1.8 0 1 .6 1.7 1.9 2.1 1.3.4 3.2 1 5.9 1.9 2.6.8 4.6 1.6 6.1 2.5 1.5.9 2.5 2 3.1 3.3.6 1.3.9 2.8.9 4.7.1 6.5-4.7 9.8-14.3 9.8z'
        />
        {tagline && (
          <g>
            <path
              fill={color.background1.hex}
              d='M286.7 93.4h9.8v1.9h-7.4V98h6.5v1.7h-6.5v3h7.4v1.9h-9.8V93.4zM299.2 101.1h2.4c.1 1.4 1.3 2 3.1 2 1.9 0 2.8-.6 2.8-1.6 0-1.2-1-1.4-3.1-1.6-3.2-.3-4.9-1-4.9-3.2 0-2.3 2.1-3.4 5.1-3.4 3.2 0 5.1 1.3 5.2 3.3h-2.5c0-1.1-1.2-1.6-2.7-1.6-1.7 0-2.5.6-2.5 1.5 0 1 .8 1.2 3.2 1.5 2.5.2 4.8.6 4.8 3.4 0 2.1-1.8 3.5-5.5 3.5-3.7-.2-5.4-1.7-5.4-3.8zM318.3 95.3v9.3h-2.4v-9.3h-4v-1.9h10.5v1.9h-4.1zM325.2 100.2v-6.8h2.4v6.6c0 1.8 1.3 2.8 3.4 2.8 2.1 0 3.3-1 3.3-2.8v-6.6h2.4v6.8c0 2.8-2.3 4.6-5.8 4.6-3.8-.1-5.7-1.9-5.7-4.6zM340.5 93.4h5.3c4 0 6.4 1.9 6.4 5.5v.1c0 3.6-2.4 5.5-6.4 5.5h-5.3V93.4zm5.2 9.3c2.7 0 3.8-1.3 3.8-3.2v-1.1c0-1.9-1.1-3.2-3.8-3.2h-2.8v7.4h2.8zM355.5 93.4h2.4v11.2h-2.4V93.4zM361.2 99.1v-.2c0-3.6 2.7-5.6 6.5-5.6s6.5 2 6.5 5.6v.2c0 3.6-2.7 5.6-6.5 5.6s-6.5-2-6.5-5.6zm10.5.4v-1.1c0-1.9-1.3-3.3-4-3.3s-4 1.4-4 3.3v1.1c0 1.9 1.3 3.3 4 3.3s4-1.4 4-3.3z'
            />
          </g>
        )}
      </g>
    </svg>
  )
}
