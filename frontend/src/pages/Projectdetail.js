import React, { useEffect, useState }  from 'react'

import ProjectDetailSmallScreen from '../components/ProjectDetailSmallScreen'
import ProjectDetailBigScreen from '../components/ProjectdetailBigScreen'

const ProjectDetail = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakpoint ? <ProjectDetailSmallScreen /> : <ProjectDetailBigScreen />;
}

export default ProjectDetail