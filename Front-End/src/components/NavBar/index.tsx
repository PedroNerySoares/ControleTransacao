import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="/importacao">Importação</Nav.Link>
        <Nav.Link href="/usuarios">Usuários</Nav.Link>
        <Nav.Link href="/suspeita">Transações suspeitas</Nav.Link>
        <Nav.Link href="">Sair</Nav.Link>
        
        <Nav.Link href='/DetalheImportacao' disabled></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;