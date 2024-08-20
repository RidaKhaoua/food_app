import { Navbar } from "@components/Layout";
import { Container } from "@components/ui";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      {/* Footer */}
    </div>
  );
}

export default MainLayout;
