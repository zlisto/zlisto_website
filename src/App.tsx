import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TeachingPage } from "./pages/TeachingPage";
import { ResearchPage } from "./pages/ResearchPage";
import { PublicationsPage } from "./pages/PublicationsPage";
import { MetaversePage } from "./pages/MetaversePage";
import { ConsultingPage } from "./pages/ConsultingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/metaverse" element={<MetaversePage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
