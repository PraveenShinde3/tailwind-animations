/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s infinite",
        fadeOut: "fadeOut 1.5s infinite",
        fadeUp: "fadeUp 1.5s infinite",
        fadeDown: "fadeDown 1.5s infinite",
        fadeLeft: "fadeLeft 1.5s infinite",
        fadeRight: "fadeRight 1.5s infinite",
        slideIn: "slideIn 0.5s ease-out",
        slideOut: "slideOut 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
        bounce: "bounce 1s infinite",
        bounceIn: "bounceIn 0.5s ease-in-out",
        bounceOut: "bounceOut 0.5s ease-in-out",
        bounceRight: "bounceRight 0.5s ease-in-out",
        bounceLeft: "bounceLeft 0.5s ease-in-out",
        bounceUp: "bounceUp 0.5s ease-in-out",
        bounceDown: "bounceDown 0.5s ease-in-out",
        zoomIn: "zoomIn 0.5s ease-out",
        zoomOut: "zoomOut 0.5s ease-out",
        pulse: "pulse 1.5s infinite",
        rotate: "rotate 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        shake: "shake 0.5s ease-in-out",
        flip: "flip 1s ease-in-out",
        heartbeat: "heartbeat 1.5s infinite",
        scaleUp: "scaleUp 0.5s ease-in-out",
        scaleDown: "scaleDown 0.5s ease-in-out",
        scaleLeft: "scaleLeft 0.5s ease-in-out",
        scaleRight: "scaleRight 0.5s ease-in-out",
        scaleIn: "scaleIn 0.5s ease-in-out",
        scaleOut: "scaleOut 0.5s ease-in-out",
        scaleUpDown: "scaleUpDown 1s infinite ease-in-out",
        scaleBounce: "scaleBounce 0.8s infinite ease-in-out",
        flipX: "flipX 1s ease-in-out",
        flipY: "flipY 1s ease-in-out",
        rollIn: "rollIn 1s ease-out",
        rollOut: "rollOut 1s ease-in",
        wobble: "wobble 1s ease-in-out",
        jello: "jello 1s ease-in-out",
        lightSpeedIn: "lightSpeedIn 1s ease-in-out",
        lightSpeedOut: "lightSpeedOut 1s ease-in-out",
        spinSlow: "spinSlow 2s linear infinite",
        spinFast: "spinFast 1s linear infinite",
        spinClockwise: "spinClockwise 2s linear infinite",
        spinCounterClockwise: "spinCounterClockwise 2s linear infinite",
        spinBounce: "spinBounce 2s ease-in-out infinite",
        spinZigzag: "spinZigzag 2s ease-in-out infinite",
        ripple: "ripple 1.5s ease-in-out infinite",
        stretchX: "stretchX 1s ease-in-out",
        stretchY: "stretchY 1s ease-in-out",
        pendulum: "pendulum 1s ease-in-out",
        swingRotate: "swingRotate 1s ease-in-out",
        blurIn: "blurIn 1s ease-in-out",
        blurOut: "blurOut 1s ease-in-out",
        glowPulse: "glowPulse 1.5s ease-in-out infinite",
        glow: "glow 1.5s ease-in-out infinite",
        diagonalSwing: "diagonalSwing 1s ease-in-out infinite",
        swingBounce: "swingBounce 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeOut: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideIn: {
          from: {
            transform: "translateX(-30%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(30%)",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(30%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideDown: {
          from: {
            transform: "translateY(-30%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(30%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideRight: {
          from: {
            transform: "translateX(-30%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        bounceIn: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        bounceOut: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
        },
        bounceRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(15px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        bounceLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-15px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        bounceUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        bounceDown: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        zoomIn: {
          from: {
            transform: "scale(0)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        zoomOut: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(0)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "75%, 100%": {
            transform: "scale(1.15)",
            opacity: "0",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(10px)",
          },
        },
        flip: {
          from: {
            transform: "rotateY(0)",
          },
          to: {
            transform: "rotateY(180deg)",
          },
        },
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "20%, 60%": {
            transform: "scale(1.1)",
          },
          "40%, 80%": {
            transform: "scale(0.9)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        scaleDown: {
          "0%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        scaleLeft: {
          "0%": {
            transform: "scaleX(0.5)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        scaleRight: {
          "0%": {
            transform: "scaleX(1.5)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        scaleOut: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0)",
            opacity: "0",
          },
        },
        scaleUpDown: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        scaleBounce: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        flipX: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(180deg)",
          },
        },
        flipY: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
        rollIn: {
          "0%": {
            transform: "rotateX(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
        rollOut: {
          "0%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
        },
        wobble: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
        },
        jello: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.1) rotate(10deg)",
          },
          "50%": {
            transform: "scale(0.9) rotate(-10deg)",
          },
          "75%": {
            transform: "scale(1.1) rotate(10deg)",
          },
        },
        lightSpeedIn: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        lightSpeedOut: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
        spinClockwise: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinCounterClockwise: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        spinFast: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinSlow: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinBounce: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg) translateY(-10px)",
          },
          "50%": {
            transform: "rotate(180deg) translateY(10px)",
          },
          "75%": {
            transform: "rotate(270deg) translateY(-10px)",
          },
        },
        spinZigzag: {
          "0%": {
            transform: "rotate(0deg) translateX(0)",
          },
          "25%": {
            transform: "rotate(90deg) translateX(10px)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(-10px)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(10px)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(0)",
          },
        },
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        stretchX: {
          "0%": {
            transform: "scaleX(1)",
          },
          "100%": {
            transform: "scaleX(1.5)",
          },
        },
        stretchY: {
          "0%": {
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(1.5)",
          },
        },
        pendulum: {
          "0%": {
            transform: "rotate(30deg)",
          },
          "50%": {
            transform: "rotate(-30deg)",
          },
          "100%": {
            transform: "rotate(30deg)",
          },
        },
        swingRotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        blurIn: {
          "0%": {
            filter: "blur(10px)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        blurOut: {
          "0%": {
            filter: "blur(0)",
          },
          "100%": {
            filter: "blur(10px)",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(0, 205, 0, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(0, 205, 0, 1)",
          },
        },
        diagonalSwing: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
          "50%": {
            transform: "translate(-20px, 20px) rotate(45deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
        },
        swingBounce: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(15deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
