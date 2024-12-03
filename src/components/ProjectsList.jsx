import React from 'react';

function ProjectsList({projects}) {
  function split(arr) {
    const partSize = Math.ceil(arr.length / 3);
    const part1 = arr.slice(0, partSize);
    const part2 = arr.slice(partSize, partSize * 2);
    const part3 = arr.slice(partSize * 2);
    
    return [part1, part2, part3];
  }
  
  const splitArr = split(projects);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {splitArr.map((column, key) => (
        <div key={`project-column-${key}`} className="flex flex-col gap-4">
          {column.map((project, index) => (
            <div key={`project-${index}`}>
              <img className="w-full" src={project.img} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>);
}

export default ProjectsList;
