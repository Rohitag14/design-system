import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Cartesian } from '@compositor/kit'

import { Stamp, Text } from '..'
import { Pin as PinIcon } from 'pcln-icons'

const sizes = { small: 'small', medium: 'medium' }
const variations = { outline: 'outline', fill: 'fill' }
const colors = {
  primary: 'primary',
  secondary: 'secondary',
  text: 'text',
  success: 'success',
  error: 'error',
  warning: 'warning',
  alert: 'alert',
  caution: 'caution',
  notify: 'notify',
  pricePrimary: 'pricePrimary',
  priceSecondary: 'priceSecondary',
  promoPrimary: 'promoPrimary',
  promoSecondary: 'promoSecondary',
  border: 'border',
  background: 'background',
}

storiesOf('Stamp', module)
  .add(
    'Default Stamp',
    withInfo({
      inline: true,
      text:
        'Use the <Stamp /> component to subtly display attributes alongside listing cells and on product detail pages. Use it in conjunction with a named `pcln-icons` icon component to give it more context. An icon placed within a Stamp will inherit the assigned Stamp color.',
    })(() => <Stamp>default stamp</Stamp>)
  )
  .add('All', () => (
    <Cartesian
      component={Stamp}
      color={Object.keys(colors)}
      variation={Object.keys(variations)}
      size={Object.keys(sizes)}
      m={3}
    >
      <>
        <PinIcon mr={1} /> top location
      </>
    </Cartesian>
  ))
  .add('Custom Background and Border Color', () => (
    <div>
      <Stamp
        color='background.lightest'
        bg='primary'
        borderColor='primary'
        mr={2}
      >
        custom border and background
      </Stamp>
      <Stamp
        color='error'
        bg='background.lightest'
        borderColor='primary'
        mr={2}
      >
        custom border and background
      </Stamp>
    </div>
  ))
  .add('Custom Text Size', () => (
    <div>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={0}>Yorkie</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={1}>Jack Russell</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={2}>Golden Retriever</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={3}>Doberman</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={4}>Malamute</Text>
      </Stamp>
    </div>
  ))
  .add('Pass an array of sizes', () => (
    <div>
      <Stamp
        borderColor='blue'
        bg='blue'
        color='white'
        mr={2}
        size={['medium', null, null, null, null, null]}
      >
        <PinIcon />
        <Text>Larger at xs</Text>
      </Stamp>
      <Stamp
        borderColor='blue'
        bg='blue'
        color='white'
        mr={2}
        size={['small', 'medium', null, null, null, null]}
      >
        <PinIcon />
        <Text>Larger at sm</Text>
      </Stamp>
      <Stamp
        borderColor='blue'
        bg='blue'
        color='white'
        mr={2}
        size={['small', null, 'medium', null, null, null]}
      >
        <PinIcon />
        <Text>Larger at md</Text>
      </Stamp>
      <Stamp
        borderColor='blue'
        bg='blue'
        color='white'
        mr={2}
        size={['small', 'small', null, 'medium', null, null]}
      >
        <PinIcon />
        <Text>Larger at lg</Text>
      </Stamp>
      <Stamp
        borderColor='blue'
        bg='blue'
        color='white'
        mr={2}
        size={['small', null, null, null, 'medium', null]}
      >
        <PinIcon />
        <Text>Larger at xl</Text>
      </Stamp>
      <Stamp
        borderColor='blue'
        bg='blue'
        color='white'
        mr={2}
        size={['small', null, null, null, null, 'medium']}
      >
        <PinIcon />
        <Text>Larger at xxl</Text>
      </Stamp>
    </div>
  ))
