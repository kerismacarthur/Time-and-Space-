interface SparkleProps {
  size?: number
  className?: string
  color?: string
}

export default function Sparkle({ size = 16, className = '', color = '#4a6e4c' }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <polygon
        points="12,0 12.5,11.5 24,12 12.5,12.5 12,24 11.5,12.5 0,12 11.5,11.5"
        fill={color}
      />
    </svg>
  )
}
