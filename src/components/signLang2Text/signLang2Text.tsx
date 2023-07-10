import RecordStart from '@/assets/icons/RecordStart.svg';
import RecordStop from '@/assets/icons/RecordStop.svg';
import Voice from '@/assets/icons/Voice.svg';
import { useAppSelector } from '@/module/hooks';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import GenderToggle from '../genderToggle/genderToggle';
import './signLang2Text.scss';
import DefaultProfile from '@/assets/icons/DefaultProfile.svg'

function SignLang2Text() {
  const [result, setResult] = useState('');
  const webcamRef = useRef<Webcam>(null);
  const [isRecording, setIsRecording] = useState(false);
  const voiceGender = useAppSelector(state => state.genderSetter.voice);
  
  let intervalId: NodeJS.Timer;
  function repeatTemporaryResult() {
    intervalId = setInterval(() => setResult(value => value ? value+'.' : value), 1000);
  }

  return (
    <div className="sign-lang-to-text">
      <div className="sign-lang-to-text__input input">
        {
          isRecording
            ? (<Webcam className="input__webcam" ref={webcamRef} />)
            : (<img className="input__webcam input__webcam--disabled" src={DefaultProfile} alt="프로필사진" />)
        }
        <img
          className="input__recording-indicator"
          src={isRecording ? RecordStop : RecordStart}
          alt={isRecording ? '녹화 중지': '녹화 시작'}
          onClick={() => {
            // TODO: 권한 획득 여부 확인
            setIsRecording(!isRecording);

            if(isRecording) {
              webcamRef.current?.video?.pause();
              clearInterval(intervalId);
              setResult('');
            } else {
              webcamRef.current?.video?.play();
              setResult('번역 중...');
              repeatTemporaryResult();
            }
          }}
        />
      </div>
      <div className="sign-lang-to-text__output output">
        <textarea className="output__text-field" value={result} readOnly spellCheck="false" autoComplete="false" />
        <div className="output__voice-box">
          <img
            className="output__voice-button"
            src={Voice}
            alt="음성"
            // TODO: 음성출력 기능 구현
            onClick={() => alert('음성출력 기능은 아직 지원하지 않습니다.')}
          />
          <GenderToggle type="voice" />
        </div>
      </div>
    </div>
  );
}

export default SignLang2Text;