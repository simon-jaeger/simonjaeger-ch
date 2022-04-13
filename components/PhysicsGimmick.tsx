import {useEffect, useRef, useState} from "react"
import {Engine, Render, Runner, Composite, Body, Bodies, Mouse, MouseConstraint} from "matter-js"
import {theme} from "tailwind.config"

export default function PhysicsGimmick() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // setup
    const engine = Engine.create()
    const world = engine.world
    const render = Render.create({
      canvas: ref.current!,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    })
    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)

    // bodies
    const balls = [
      Bodies.circle(50, window.innerHeight - 50, 50, {
        restitution: 0.5,
        render: {fillStyle: theme.colors.green["400"]},
      }),
      Bodies.circle(130, window.innerHeight - 30, 30, {
        restitution: 0.5,
        render: {fillStyle: theme.colors.blue["400"]},
      }),
      Bodies.circle(180, window.innerHeight - 20, 20, {
        restitution: 0.5,
        render: {fillStyle: theme.colors.red["400"]},
      }),
    ]
    const wallBottom = Bodies.rectangle(
      window.innerWidth / 2, window.innerHeight + 100, 9999, 200, {
        isStatic: true, render: {visible: false},
      },
    )
    const wallLeft = Bodies.rectangle(
      -100, window.innerHeight / 2, 200, 9999, {
        isStatic: true, render: {visible: false},
      },
    )
    const wallRight = Bodies.rectangle(
      window.innerWidth + 100, window.innerHeight / 2, 200, 9999, {
        isStatic: true, render: {visible: false},
      },
    )
    Composite.add(world, [wallBottom, wallLeft, wallRight, ...balls])

    // mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        // @ts-ignore
        constraint: {stiffness: 0.2, render: {visible: false}},
      })
    Composite.add(world, mouseConstraint)
    render.mouse = mouse

    // onResize
    const onResize = () => {
      render.bounds.max.x = window.innerWidth
      render.bounds.max.y = window.innerHeight
      render.options.width = window.innerWidth
      render.options.height = window.innerHeight
      render.canvas.width = window.innerWidth
      render.canvas.height = window.innerHeight
      Body.setPosition(wallBottom, {
        x: wallBottom.position.x,
        y: window.innerHeight + 100,
      })
      Body.setPosition(wallRight, {
        x: window.innerWidth + 100,
        y: wallRight.position.y,
      })
      balls.forEach((ball, i) => {
        if (ball.position.y > wallBottom.position.y || ball.position.x < wallLeft.position.x || ball.position.x > wallRight.position.x) {
          Body.setPosition(ball, {x: 100 * i, y: window.innerHeight - 100})
        }
      })
    }
    window.addEventListener("resize", onResize)

    // cleanup
    return () => {
      Engine.clear(engine)
      Render.stop(render)
      Runner.stop(runner)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas className="fixed inset-0 -z-10" ref={ref}></canvas>
}
