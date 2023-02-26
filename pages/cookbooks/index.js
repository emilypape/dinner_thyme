import userCookbooks from '../../components/userCookbooks';
import Nav from '../../components/nav';

function cookbookRoute() {
  return (
    <div>
      <Nav />
      <userCookbooks />
      <div>This is our logged in user's cookbook page</div>
    </div>
  );
}

export default cookbookRoute;
