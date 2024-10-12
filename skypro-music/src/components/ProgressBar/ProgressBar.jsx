import { useState, useRef, useEffect } from "react";
import * as S from '../ProgressBar/ProgressBar.styles'
import { useDispatch, useSelector } from "react-redux";

export default function ProgressBar({audioRef}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const refProgress = useRef();
	const dispatch = useDispatch();
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
  }, [audioRef, dispatch]);
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
      <S.ProgressInput
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