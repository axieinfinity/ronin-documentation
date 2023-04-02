import React, { useEffect } from 'react'

import SearchBar from '@theme-original/SearchBar'

import styles from './index.module.scss'

export default function SearchBarWrapper(props) {

useEffect(() => {
  const searchInput = document.getElementById('search_input_react');
  if(searchInput) {
    searchInput.dispatchEvent(new MouseEvent('mouseover', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    }));
  }
},[])

  return (
    <div className={styles.searchWrapper}>
      <SearchBar {...props} placeholder="meep" />
    </div>
  )
}
