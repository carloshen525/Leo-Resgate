import React from 'react';

export default function Logo({ size = 'normal', className = '' }) {
  const sizeClass = size === 'large'
    ? 'w-[220px] h-[86px]'
    : size === 'small'
      ? 'w-[140px] h-[55px]'
      : 'w-[150px] h-[58px] sm:w-[190px] sm:h-[73px]';

  return (
    <img
      src="/images/logo-leo-resgate.jpeg"
      alt="LÉO AUTO SOCORRO — LÉO RESGATE"
      className={`select-none object-cover object-top ${sizeClass} ${className}`}
    />
  );
}
