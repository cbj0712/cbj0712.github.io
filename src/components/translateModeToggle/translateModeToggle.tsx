import { useAppDispatch, useAppSelector } from '@/module/hooks';
import { setSignLang2text, setText2signLang } from './translateModeSetterSlice';
import './translateModeToggle.scss';

interface TranslateModeToggleProps {
  scale?: number;
}

function TranslateModeToggle(props: TranslateModeToggleProps) {
  const translateMode = useAppSelector(state => state.translateModeSetter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="translate-mode-toggle" style={{fontSize: props.scale ? `${props.scale}em` : '1em'}}>
      <div
        className={`translate-mode-toggle__highlight ${translateMode === 'text2SignLang' ? 'translate-mode-toggle__highlight--activated' : ''}`}
        onClick={() => dispatch(setText2signLang())}
      >
        <span>텍스트</span>
      </div>
      <div 
        className={`translate-mode-toggle__highlight ${translateMode === 'signLang2Text' ? 'translate-mode-toggle__highlight--activated' : ''}`}
        onClick={() => dispatch(setSignLang2text())}
      >
        <span>수어</span>
      </div>
    </div>
  );
}

export default TranslateModeToggle;