import Header from './components/header/header';
import SignLang2Text from './components/signLang2Text/signLang2Text';
import Text2SignLang from './components/text2SignLang/text2SignLang';
import './main.scss';
import { useAppSelector } from './module/hooks';

function Main() {
  const translateMode = useAppSelector(state => state.translateModeSetter.value);

  return (
    <div className="main">
      <Header />
      {
        translateMode === 'text2SignLang'
          ? <Text2SignLang />
          : <SignLang2Text />
      }
    </div>
  );
}

export default Main;
