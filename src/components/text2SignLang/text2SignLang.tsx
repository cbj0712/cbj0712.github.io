import './text2SignLang.scss';
import Microphone from '@/assets/icons/Microphone.svg';
import GenderToggle from '../genderToggle/genderToggle';
import { useAppSelector } from '@/module/hooks';
import MaleAvatar from '@/assets/avatars/TemporaryMaleAvatar.webp';
import FemaleAvatar from '@/assets/avatars/TemporaryFemaleAvatar.gif';

function Text2SignLang() {
  const avatarGender = useAppSelector(state => state.genderSetter.avatar);

  return (
    <div className="text-to-sign-lang">
      <div className="text-to-sign-lang__input input">
        <textarea className="input__text-field" placeholder="번역할 문장을 입력해주세요." spellCheck="false" autoComplete="false" />
        <img
          className="input__microphone-button"
          src={Microphone}
          alt="마이크"
          // TODO: 음성인식 기능 구현
          onClick={() => alert('음성인식 기능은 아직 지원하지 않습니다.')}
        />
      </div>
      <div className="text-to-sign-lang__output output">
        <div className="output__avatar" style={{backgroundImage: avatarGender === 'male' ? `url(${MaleAvatar})` : `url(${FemaleAvatar})`}} />
        <GenderToggle type="avatar" scale={1.5} />
      </div>
    </div>
  );
}

export default Text2SignLang;