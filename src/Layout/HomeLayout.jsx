import AdminNavbar from "../Component/AdminNavbar";

function HomeLayout({ children }) {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
}

export default HomeLayout