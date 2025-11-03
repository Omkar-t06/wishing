import { useEffect } from "react"
import confetti from "canvas-confetti"

/**
 * Triggers a side-cannons confetti effect automatically upon component mount.
 * @param {number} delayMs - Delay in milliseconds before starting the confetti.
 */
/**
 * ConfettiAutoTrigger
 * @param {number} delayMs - Delay in milliseconds before starting the confetti.
 * @param {number} size - Size multiplier for confetti shapes (passed to canvas-confetti as `scalar`).
 */
export function ConfettiAutoTrigger({ delayMs = 1500, size = 1.6 }) {
  useEffect(() => {
    // Set a timeout to run the confetti after the specified delay
    const startConfettiTimeout = setTimeout(() => {
      const duration = 3 * 1000 // 3 seconds
      const end = Date.now() + duration
      const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"] // Your original colors

      const frame = () => {
        if (Date.now() > end) return

        // Left cannon (use `scalar` to increase/decrease particle size)
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
          scalar: size,
        })
        // Right cannon
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
          scalar: size,
        })

        requestAnimationFrame(frame)
      }

      frame()
    }, delayMs)

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(startConfettiTimeout)
  }, [delayMs]) // Re-run effect if delayMs changes

  // The component doesn't render any visible elements, it just triggers the effect
  return null
}