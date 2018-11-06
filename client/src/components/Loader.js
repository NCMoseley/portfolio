import React from 'react';

import { BounceLoader } from 'react-spinners';

export const Loader = () => (
  <div className="loader">
    <BounceLoader color={'#1eaedb'} size={90} />
  </div>
);
