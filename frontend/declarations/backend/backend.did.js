export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getImage' : IDL.Func([], [IDL.Vec(IDL.Nat8)], []),
    'upload' : IDL.Func([IDL.Vec(IDL.Nat8)], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
