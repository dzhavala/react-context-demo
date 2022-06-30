import React from "react";

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export default function createContextAndProvider<A extends {} | null>() {
  const context = React.createContext<A | undefined>(undefined);
  function useContext() {
    const c = React.useContext(context);
    
    if (c === undefined)
      throw new Error(`context must be inside a Provider with a value`);
    return c;
  }

  return [useContext, context.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

// Usage:

// We still have to specify a type, but no default!
// export const [useCurrentUserName, CurrentUserProvider] = createContextAndProvider<string>();

// function EnthusasticGreeting() {
//   const currentUser = useCurrentUserName();
//   return <div>HELLO {currentUser.toUpperCase()}!</div>;
// }

// function App() {
//   return (
//     <CurrentUserProvider value="Anders">
//       <EnthusasticGreeting />
//     </CurrentUserProvider>
//   );
// }