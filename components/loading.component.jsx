import { NProgress } from "@tanem/react-nprogress";
import React from "react";
import { useSelector } from 'react-redux'
import { selectLoading } from '../store/slices/loading.slice';

const Loading = () => {
    const loading = useSelector(selectLoading)

  return (
    <NProgress isAnimating={loading} key={Math.floor(Math.random() * 100000)}>
      {({ isFinished, progress, animationDuration }) => (
        <div
          style={{
            opacity: isFinished ? 0 : 1,
            pointerEvents: "none",
            transition: `opacity ${animationDuration}ms linear`,
          }}
        >
          <div
            style={{
              background: "#29d",
              height: 2,
              left: 0,
              marginLeft: `${(-1 + progress) * 100}%`,
              position: "fixed",
              top: 0,
              transition: `margin-left ${animationDuration}ms linear`,
              width: "100%",
              zIndex: 1031,
            }}
          >
            <div
              style={{
                boxShadow: "0 0 10px #29d, 0 0 5px #29d",
                display: "block",
                height: "100%",
                opacity: 1,
                position: "absolute",
                right: 0,
                transform: "rotate(3deg) translate(0px, -4px)",
                width: 100,
              }}
            />
          </div>
        </div>
      )}
    </NProgress>
  );
};

export default Loading;
