import React from 'react'
import { SocialLink } from './ui/SocialLink'

export const Socials = () => {
  return (
    <div className='socials'>
      <SocialLink type={'telegram'}/>
      <SocialLink type={'phone'}/>
      <SocialLink type={'mail'}/>
      <SocialLink type={'linkedin'}/>
    </div>
  )
}
