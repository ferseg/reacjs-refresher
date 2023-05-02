import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const [_, setState] = useState(globalState);
  const dispatch = (action, payload) => {
    const newState = actions[action](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, []);

  return [
    globalState,
    dispatch,
  ];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...initialState };
  }
  actions = { ...actions, ...userActions };
};
