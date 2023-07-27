import React from 'react';

export default function index({ Href_link, id }) {
  return (
    <div className='flex'>
      <ul className='flex'>
        <li>
          <a href={Href_link}>{id}</a>
        </li>
      </ul>
    </div>
  );
}
