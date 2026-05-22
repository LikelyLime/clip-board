import React from 'react';

function FilterBar() {
  return (
    <div className='filterBar'>
      <button className='filterBtn active'>전체 3</button>
      <button className='filterBtn'>미편집 1</button>
      <button className='filterBtn editing'>편집중 1</button>
      <button className='filterBtn done'>완료 1</button>
    </div>
  )
}

export default FilterBar;