import React from "react";
import './styles.scss';
import Masonry from 'react-masonry-css';


const breakpointColumnsObj = {
  default: 3,
  1400: 3,
  900: 2,
  500: 1,
};

class ProjectGrid extends React.Component {
  render() {
    const spots = this.props.spots
    
    return (
      <div className="index-container">
        <Masonry 
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          {spots.map(({ node }) => {
            return (
              <div>
                <img key={node.id} alt={node.id} src={node.childImageSharp.fluid.src} />
              </div>
            )
            })}
        </Masonry>
      </div>
    )
  }
}


export default ProjectGrid

