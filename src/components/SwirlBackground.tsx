import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function SwirlBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { dark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let t = 0

    const drawCurvedStripe = (offsetY: number, speed: number, color: string) => {
      ctx.beginPath()
      ctx.moveTo(-100, offsetY)

      for (let x = -100; x <= canvas.width + 100; x += 10) {
        const y = offsetY + Math.sin((x * 0.005) + t * speed) * 60
        ctx.lineTo(x, y)
      }

      for (let x = canvas.width + 100; x >= -100; x -= 10) {
        const y = offsetY + Math.sin((x * 0.005) + t * speed) * 60 + 20
        ctx.lineTo(x, y)
      }

      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    const stripes = [
      { offsetY: canvas.height * 0.15, speed: 0.8, color: 'rgba(0, 160, 190, 0.25)' },
      { offsetY: canvas.height * 0.30, speed: 0.6, color: 'rgba(0, 130, 170, 0.20)' },
      { offsetY: canvas.height * 0.50, speed: 1.0, color: 'rgba(0, 150, 180, 0.30)' },
      { offsetY: canvas.height * 0.70, speed: 0.7, color: 'rgba(0, 120, 160, 0.20)' },
      { offsetY: canvas.height * 0.85, speed: 0.9, color: 'rgba(0, 140, 175, 0.25)' },
    ]

    const draw = () => {
      ctx.fillStyle = dark ? '#000000' : '#e3f2ff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.transform(1, 0.3, 0, 1, 0, 0)
      stripes.forEach(s => drawCurvedStripe(s.offsetY, s.speed, s.color))
      ctx.restore()

      t += 0.008
      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [dark])

  return (
    <canvas
      ref={canvasRef}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      className='fixed top-0 left-0 w-screen h-screen -z-10'
      style={{ display: 'block' }}
    />
  )
}