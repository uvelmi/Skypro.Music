import { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

export const StyledProgressInput = styled.input`
--progress-height: 5px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? "#AD61FF"};

  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;
	margin-bottom: -9px;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`;

export default function ProgressBar({audioRef}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const refProgress = useRef();

  const handleCurrentTime = (value) => {
    setCurrentTime(value);
    audioRef.current.currentTime = value / duration;
  };

  useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current.currentTime);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  }, [audioRef]);

	const handleProgressClick = (e) => {
    const progressRect = refProgress.current.getBoundingClientRect();
    const percent = (e.clientX - progressRect.left) / progressRect.width;
    const newTime = percent * duration;

    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

	return (
    <div ref={refProgress} onClick={handleProgressClick}>
			<div style={{ position: 'relative', textAlign: 'right', color:'#696969', marginRight: '7px'}}>{formatTime(currentTime)} / {formatTime(duration)}</div>
      <StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(e) => handleCurrentTime(e.target.value)}
        $color="#AD61FF"
      />
    </div>
  );
}

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${minutes}:${seconds.toString().padStart(2, 0)}`;
};