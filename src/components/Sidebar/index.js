import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from './styles';
import User from '../User';

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src='/images/homeIcon.svg'></img>
        <span>Para ti</span>
      </MenuItem>
      <MenuItem>
        <img src='/images/peopleIcon.svg'></img>
        <span>Siguiendo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Cuentas principales</FollowingHeader>
        <User
          user={{
            name: 'Will Smit',
            username: 'willsmith',
            avatar:
              'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg',
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carrera</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ayuda</a>
          <a>Seguridad</a>
        </Links>
        <Links>
          <a>Directrizes de comunidades</a>
          <a>Condiciones</a>
        </Links>
        <Links margin>
          <a>Privacidad</a>
        </Links>
        <Links margin>
          <a>© 2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
