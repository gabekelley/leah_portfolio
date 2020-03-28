import React from "react";
import styles from './index-grid.module.css';

class ProjectGrid extends React.Component {
  render() {
    const spots = this.props.spots
    
    return (
      <div className={styles.container}>
        {spots.map(({ node }) => {
          return (
            <div className={styles.box}>
              <img src={node.childImageSharp.fluid.src} />
            </div>
          )
          })}
      </div>
    )
  }
}


export default ProjectGrid

