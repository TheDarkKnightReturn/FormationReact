import { useParams } from "react-router-dom";
import useUsers from "../../contexts/users";
import { Card } from "../../components/Card";

const Page = () => {
  const { getUserById } = useUsers();
  const { userId } = useParams();

  const user = getUserById(userId);
  console.log(user);

  return (
    <div>
      {user ? (
        <Card
          title={`${user.name} ${user.firstName}`}
          subTitle={`${user.empNumber} - ${user.id}`} 
        ></Card>
      ) : (
        <p>Utilisateur introuvable</p>
      )}
    </div>
  );
};

export default Page;
