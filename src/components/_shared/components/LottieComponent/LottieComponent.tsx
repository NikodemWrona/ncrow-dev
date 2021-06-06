import { FC, useMemo } from 'react'
import Lottie, { Options } from 'react-lottie';
import { WorkingAnimationData } from '@__/assets'

type LottieAnimations = 'working'

type LottieComponentProps = {
  animation: LottieAnimations
}
const prepareAnimationData = (animation: LottieAnimations): unknown => {
  switch (animation) {
    case 'working': {
      return WorkingAnimationData
    }
  }
}

const getLottieOptions = (animation: LottieAnimations): Options => {
  return {
    loop: true,
    autoplay: true,
    animationData: prepareAnimationData(animation),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
}

export const LottieComponent: FC<LottieComponentProps> = ({ animation }) => {
  const options = useMemo(() => getLottieOptions(animation), [animation])

  return (
    <Lottie
      options={options}
      height={600}
      width={900}
      isStopped={false}
      isPaused={false}
    />
  )
}
