import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0, 0, 7)

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    host.appendChild(renderer.domElement)

    const system = new THREE.Group()
    scene.add(system)

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, 1),
      new THREE.MeshBasicMaterial({ color: 0x5b8dff, wireframe: true, transparent: true, opacity: 0.72 })
    )
    system.add(core)

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.82, 1),
      new THREE.MeshBasicMaterial({ color: 0x63e6e2, wireframe: true, transparent: true, opacity: 0.38 })
    )
    system.add(inner)

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.72, 0.012, 8, 96),
      new THREE.MeshBasicMaterial({ color: 0xd6f36a, transparent: true, opacity: 0.72 })
    )
    ring.rotation.set(0.9, 0.2, -0.45)
    system.add(ring)

    const secondRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.008, 8, 96),
      new THREE.MeshBasicMaterial({ color: 0x2f6bff, transparent: true, opacity: 0.34 })
    )
    secondRing.rotation.set(-0.35, 0.8, 0.6)
    system.add(secondRing)

    const points = new Float32Array(420 * 3)
    for (let i = 0; i < points.length; i += 3) {
      const radius = 2.4 + Math.random() * 1.9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      points[i] = radius * Math.sin(phi) * Math.cos(theta)
      points[i + 1] = radius * Math.cos(phi)
      points[i + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(points, 3)),
      new THREE.PointsMaterial({ color: 0x5b8dff, size: 0.018, transparent: true, opacity: 0.62 })
    )
    system.add(particles)

    const pointer = { x: 0, y: 0 }
    const target = { scroll: 0, x: 0, y: 0 }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onScroll = () => { target.scroll = window.scrollY }
    const onPointer = (event) => {
      pointer.x = (event.clientX / window.innerWidth) - 0.5
      pointer.y = (event.clientY / window.innerHeight) - 0.5
    }
    const resize = () => {
      const width = host.clientWidth || 1
      const height = host.clientHeight || 1
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    const observer = new ResizeObserver(resize)
    observer.observe(host)
    onScroll()
    resize()

    let frame = 0
    const render = () => {
      target.x += (pointer.y * 0.28 - target.x) * 0.04
      target.y += (pointer.x * 0.34 - target.y) * 0.04
      const scrollTurn = Math.min(target.scroll / Math.max(window.innerHeight, 1), 4)
      system.rotation.x = target.x + scrollTurn * 0.16
      system.rotation.y = target.y + scrollTurn * 0.3
      system.position.y = reducedMotion ? 0 : -scrollTurn * 0.22
      ring.rotation.z += reducedMotion ? 0 : 0.002
      secondRing.rotation.z -= reducedMotion ? 0 : 0.0015
      particles.rotation.y += reducedMotion ? 0 : 0.0007
      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
      observer.disconnect()
      core.geometry.dispose()
      core.material.dispose()
      inner.geometry.dispose()
      inner.material.dispose()
      ring.geometry.dispose()
      ring.material.dispose()
      secondRing.geometry.dispose()
      secondRing.material.dispose()
      particles.geometry.dispose()
      particles.material.dispose()
      renderer.dispose()
      host.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={hostRef} className="three-scene" aria-hidden="true" />
}
