import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './Topbar.scss';

export default function Topbar() {
  return (
    <div className='topbar'>
        <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook'><Facebook /></a>
        <a href="https://twitter.com/ancientpupy" className='twitter' target='_blank' title='twitter'><Twitter /></a>
        <a href="https://www.instagram.com/ancientpupy" className='instagram' target='_blank' title='instagram'><Instagram /></a>
        <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube'><YouTube /></a>
        <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><LinkedIn /></a>
    </div>
  )
}