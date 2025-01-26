import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => setState(prevState => !prevState), []);

  return [state, toggle] as const;
};

export default useToggle;
