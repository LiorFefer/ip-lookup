import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { noop } from "./utils/noop";

type Observer = {
  notify: Dispatch<SetStateAction<boolean>>;
};

type Observers = Array<Observer>;
type SetStateCallback<T> = (state: T) => void;
type NewState<T> = T | ((prevState: T) => T);

export const createGlobalState = <T>(initialValue: T) => {
  let observers: Observers = [];
  let state = initialValue;

  const useGlobalState = (): [
    T,
    (newState: NewState<T>, setStateCallback?: SetStateCallback<T>) => void
  ] => {
    // dummy state to force re-render
    // the actual state is stored in the closure to prevent deuplication
    const [_state, _setState] = useState(true);

    const setState = (
      newState: NewState<T>,
      setStateCallback: SetStateCallback<T> = noop
    ) => {
      if (typeof newState === "function") {
        state = (newState as (prevState: T) => T)(state);
      } else {
        state = newState;
      }

      observers.forEach((observer) => {
        observer.notify((state) => !state);
      });
      setStateCallback(state);
    };

    const removeObserverHOF = (observerToRemove: Observer) => () => {
      observers = observers.filter((observer) => observer !== observerToRemove);
    };

    useEffect(() => {
      const observer = { notify: _setState };
      observers.push(observer);
      return removeObserverHOF(observer);
    }, []);

    return [state, setState];
  };

  return useGlobalState;
};
