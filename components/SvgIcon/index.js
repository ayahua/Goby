import React from 'react';

const SvgIcon = ({ type, className = '', size = 'md', ...restProps }) => (
  <svg className={`jl-icon jl-icon-${size} ${className}`} aria-hidden="true" {...restProps}>
    <use xlinkHref={`#${type}`} />
  </svg>
);

export default SvgIcon;
