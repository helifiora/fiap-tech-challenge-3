import { PropsWithChildren, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function AppMain(props: PropsWithChildren) {
  const { pathname } = useLocation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.scrollTo({ behavior: "instant", top: 0 });
    }
  }, [pathname]);

  return (
    <main ref={ref} style={{ overflowY: "auto", padding: "0 16px" }}>
      {props.children}
    </main>
  );
}
