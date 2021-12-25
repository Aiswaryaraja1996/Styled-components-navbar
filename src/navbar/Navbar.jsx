import styled from "styled-components";

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  background-color: #3f51b5;
  color: white;
  font-size: 1rem;
  > * {
    margin: 0.5rem;
    &:nth-child(2) {
      display: flex;
      gap: 1rem;
    }
  }
`;

const SiteName = styled.div`
  background-color: #37479f;
  padding:.25rem;
`;

const DrawerItem = ({ label }) => {
  return (
    <div>
      {label}
    </div>
  );
};

export default function Navbar() {
  return (
    <ToolBar>
      <SiteName>
        <DrawerItem label="SITENAME" />
      </SiteName>
      <div>
        <DrawerItem label="About us" />
        <DrawerItem label="Prices" />
        <DrawerItem label="Other" />
        <DrawerItem label="Contact" />
      </div>
    </ToolBar>
  );
}
