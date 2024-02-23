import React, { useRef, useEffect } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useOnClickOutside } from './useOnClickOutside'

// Mock functional component that uses useOnClickOutside hook
const MockComponent = ({ handler }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, handler)

  return (
    <div>
      <div data-testid="insideElement">Inside Element</div>
      <div data-testid="outsideElement">Outside Element</div>
    </div>
  )
}

describe('useOnClickOutside', () => {
  test('calls handler when clicked outside the referenced element', () => {
    const handler = jest.fn()
    const { getByTestId } = render(<MockComponent handler={handler} />)

    fireEvent.mouseDown(getByTestId('outsideElement'))

    expect(handler).toHaveBeenCalledTimes(0)
  })

  test('does not call handler when clicked inside the referenced element', () => {
    const handler = jest.fn()
    const { getByTestId } = render(<MockComponent handler={handler} />)

    fireEvent.mouseDown(getByTestId('insideElement'))

    expect(handler).not.toHaveBeenCalled()
  })
})