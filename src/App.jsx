import React from "react";
import PageLayout from "./components/PageLayout";
import TopBar from "./components/TopBar";
import InputAndButton from "./components/InputAndButton";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <PageLayout>
      <TopBar />
      <InputAndButton />
      <Contacts />
    </PageLayout>
  );
}
