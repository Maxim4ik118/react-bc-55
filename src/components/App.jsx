import { useRef, useState } from 'react';
import { useSize, useMouse } from 'react-use';
import BookList from './BookList/BookList';

import Container from './Container/Container';
import SearchBar from './SearchBar/SearchBar';
import BookForm from './BookForm/BookForm';
import Modal from './Modal/Modal';

export function App() {
  const [sized, { width, height }] = useSize(
    ({ width }) => (
      <div style={{ background: width <= 500 ? 'red' : 'lime' }}>
        Size me up! ({width}px)
      </div>
    ),
    { width: 100, height: 100 }
  );
  const ref = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const [modal, setModal] = useState({ isOpen: false, modalData: null });

  const onOpenModal = data => setModal({ isOpen: true, modalData: data });

  const onCloseModal = () => setModal({ isOpen: false, modalData: null });
  return (
    <div ref={ref}>
      <div>
        Mouse position in document - x:{docX} y:{docY}
      </div>
      <div>
        Mouse position in element - x:{elX} y:{elY}
      </div>
      <div>
        Element position- x:{posX} y:{posY}
      </div>
      <div>
        Element dimensions - {elW}x{elH}
      </div>
      <Container>
        <BookForm />
      </Container>
      <Container>
        <SearchBar title="Search Book" />
      </Container>
      <Container>
        <BookList onOpenModal={onOpenModal} listTitle="Book List" />
      </Container>
      <Container>
        <BookList onOpenModal={onOpenModal} listTitle="Book List" />
      </Container>
      <Container>{sized}</Container>
      <Container>
        <BookList onOpenModal={onOpenModal} listTitle="Book List" />
      </Container>
      <Container>
        <BookList onOpenModal={onOpenModal} listTitle="Book List" />
      </Container>

      {modal.isOpen && (
        <Modal onCloseModal={onCloseModal} modalData={modal.modalData} />
      )}
    </div>
  );
}
