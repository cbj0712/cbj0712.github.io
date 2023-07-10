import { useAppDispatch, useAppSelector } from '@/module/hooks';
import { setFemaleAvatar, setFemaleVoice, setMaleAvatar, setMaleVoice } from './genderSetterSlice';
import './genderToggle.scss';
import MarsSymbol from '@/assets/icons/MarsSymbol.svg';
import VenusSymbol from '@/assets/icons/VenusSymbol.svg';

interface GenderToggleProps {
  type: 'avatar' | 'voice';
  scale?: number;
}

function GenderToggle(props: GenderToggleProps) {
  const gender = useAppSelector(state => state.genderSetter[props.type]);
  const dispatch = useAppDispatch();

  return (
    <div className="gender-toggle" style={{fontSize: props.scale ? `${props.scale}em` : '1em'}}>
      <div
        className={`gender-toggle__highlight ${gender === 'male' ? 'gender-toggle__highlight--activated' : ''}`}
        onClick={() => dispatch((props.type === 'avatar' ? setMaleAvatar : setMaleVoice)())}
      >
        <img className="gender-toggle__icon" src={MarsSymbol} alt="남성기호" />
      </div>
      <div 
        className={`gender-toggle__highlight ${gender === 'female' ? 'gender-toggle__highlight--activated' : ''}`}
        onClick={() => dispatch((props.type === 'avatar' ? setFemaleAvatar : setFemaleVoice)())}
      >
        <img className="gender-toggle__icon" src={VenusSymbol} alt="여성기호" />
      </div>
    </div>
  );
}

export default GenderToggle;