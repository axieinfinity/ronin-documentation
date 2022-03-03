import React from 'react'

import SearchBar from '@theme-original/SearchBar'

import styles from './index.module.scss'

export default function SearchBarWrapper(props) {
  return (
    <div className={styles.searchWrapper}>
      <SearchBar {...props} />
    </div>
  )
}
