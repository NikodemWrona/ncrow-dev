import { FC } from 'react'

import { Typography } from '../../../_shared'
import { SubHeaderText, HighlightedWord } from './styledComponents'

type SubHeaderProps = {
  text: string
  highlightedWord: string
}

const mapTextToArrayOfWords = (text: string): string[] => {
    return text.split(' ');
}

export const SubHeader: FC<SubHeaderProps> = ({ text, highlightedWord }) => {
  const renderWord = (word: string, highlightedWord: string): JSX.Element => {
    if (word === highlightedWord) {
      return (
        <HighlightedWord>
          {word}{' '}
        </HighlightedWord>
      )
    }

    return (
      <span>
        {word}{' '}
      </span>
    )
  }

  const renderText = (): JSX.Element => {
    const words = mapTextToArrayOfWords(text);

    return (
      <>
        {words.map(word => renderWord(word, highlightedWord))}
      </>
    )
  }

  return (
    <>
      <Typography customFontSize={3}>
        <SubHeaderText>
          {renderText()}
        </SubHeaderText>
      </Typography>
    </>
  )
}
