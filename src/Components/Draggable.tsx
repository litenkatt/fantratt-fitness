import { animated, useSpring } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import React, { ReactChild, useEffect } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  z-index: 10;
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
`;
const AnimatedStyledCard = animated(StyledCard);

const useGesture = createUseGesture([dragAction, pinchAction]);

export default function BroccoBro({ children }: { children: ReactChild }) {
  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = React.useRef(null);

  useGesture(
    {
      // onHover: ({ active, event }) => console.log('hover', event, active), //TODO: pratbubbla?
      // onMove: ({ event }) => console.log('move', event),
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
        api.start({ x, y });
      },
      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
        if (first && ref.current) {
          const { width, height, x, y } = (ref.current as HTMLDivElement).getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, rotateZ: a, x, y });
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    }
  );

  return (
    <AnimatedStyledCard ref={ref} style={style}>
      {children}
    </AnimatedStyledCard>
  );
}
