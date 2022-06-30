import { FC, ReactNode } from "react";
type ComponentProps = {
  children: ReactNode;
};

export default function combineProviders (...components: FC[]) {
  return components.reduce(
    (AccumulatedComponents: FC<ComponentProps>, CurrentComponent: FC<ComponentProps>) => {
      return ({ children }: ComponentProps) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: ComponentProps) => <>{children}</>
  );
};
