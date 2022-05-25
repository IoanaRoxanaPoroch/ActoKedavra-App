import { Button } from "../button/Button";
import { Title } from "../title/Title";

const DeleteAll = () => {
  return (
    <div className="delete-all-actors">
      <Title>Are you sure you want to delete all the actors of the list?</Title>
      {/* //   <Button
    //     className="home-btn-primary"
    //     type="btn-primary"
    //     onClick={onClickOpenModal}
    //   >
    //     Add new actor
    //   </Button>
    //   <Button
    //     className="changed-mind-btn add-edit-actor-changed-mind-btn"
    //     onClick={() => {
    //       openModal(false);
    //     }}
    //   >
    //     I changed my mind
    //   </Button> */}
    </div>
  );
};

export default DeleteAll;
