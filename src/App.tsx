import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu sem
        sodales, dignissim ipsum eget, dignissim erat. Mauris sodales quis
        lectus eget congue. Nulla non fringilla ante. Praesent in blandit mi.
        Aenean semper, diam vitae malesuada rhoncus, lacus augue fermentum
        dolor, quis vulputate nunc nisi non turpis. Praesent malesuada ante
        tellus, in gravida mi placerat ac. Nulla orci urna, posuere posuere
        posuere ac, ultrices ullamcorper eros. Vivamus pellentesque tempor
        dictum. Cras euismod laoreet nisl vitae aliquam.
      </p>
    </>
  );
}
