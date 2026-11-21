import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TeachingPage } from "./pages/TeachingPage";
import { PublicationsPage } from "./pages/PublicationsPage";
import { MetaversePage } from "./pages/MetaversePage";
import { ConsultingPage } from "./pages/ConsultingPage";
import { ArcadePage } from "./pages/ArcadePage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/arcade" element={<ArcadePage />} />
          <Route path="/metaverse" element={<MetaversePage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
