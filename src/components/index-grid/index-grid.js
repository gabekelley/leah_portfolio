import React from "react";
import styles from './index-grid.module.css';

class ProjectGrid extends React.Component {
  render() {
    
    return (
      <div className={styles.container}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
      </div>
    )
  }
}

export default ProjectGrid

