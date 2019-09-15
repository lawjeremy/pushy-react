import React, { useState } from 'react';

const PushyMenuContext = React.createContext(true);

const PushyMenuProvider = props => {
  const [state, setState] = useState(false);
  return (
    <PushyMenuContext.Provider value={[state, setState]}>
      {props.children}
    </PushyMenuContext.Provider>
  );
};

export { PushyMenuContext, PushyMenuProvider };
