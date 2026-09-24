import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import BlueprintCanvas from '../src/components/BlueprintCanvas.jsx'

describe('BlueprintCanvas', () => {
  it('renderiza un canvas y llama getContext', () => {
    const spy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext')
    const { container } = render(
      <BlueprintCanvas
        points={[
          { x: 10, y: 10 },
          { x: 50, y: 60 },
        ]}
      />,
    )
    expect(container.querySelector('canvas')).toBeInTheDocument()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('agrega un punto al hacer click cuando el canvas es editable', () => {
    const onPointsChange = vi.fn()
    const { container } = render(<BlueprintCanvas editable onPointsChange={onPointsChange} />)
    const canvas = container.querySelector('canvas')
    vi.spyOn(canvas, 'getBoundingClientRect').mockReturnValue({
      left: 0, top: 0, width: 520, height: 360,
    })
    fireEvent.click(canvas, { clientX: 40, clientY: 80 })
    expect(onPointsChange).toHaveBeenCalledWith([{ x: 40, y: 80 }])
  })
})
