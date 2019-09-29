import React, { useState } from 'react';

const PushyMenuContext = React.createContext(true);

const PushyMenuProvider = ({ children }) => {
  const [state, setState] = useState(false);
  return (
    <PushyMenuContext.Provider value={[state, setState]}>
      {children}
    </PushyMenuContext.Provider>
  );
};

export { PushyMenuContext, PushyMenuProvider };
