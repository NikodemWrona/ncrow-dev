import { throttle } from 'lodash'

export type SizePayload = {
  height: number
  width: number
}

export class ResizeListener {
  public addListener(listener: (payload: SizePayload) => void): void {
    window.addEventListener('resize', throttle(() => listener({
      width: window.innerWidth,
      height: window.innerHeight
    }), 200))
  }

  public removeListener(listener: (payload: SizePayload) => void): void {
    window.removeEventListener('resize', throttle(() => listener({
      width: window.innerWidth,
      height: window.innerHeight
    }), 200))
  }
}
