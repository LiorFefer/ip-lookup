import { FC } from "react";
import { Header } from "./components/Header";
import { Body } from "./components/body/Body";
import { PageContainer } from "./ui-components";

export const App: FC = () => {
  return (
    <PageContainer>
      <Header />
      <Body />
    </PageContainer>
  );
};
