import { setSidebarItems } from '@/store/slice/sidebarSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Projects = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
       dispatch(setSidebarItems([]));
  })
  return (
    <div>Projects</div>
  )
}

export default Projects