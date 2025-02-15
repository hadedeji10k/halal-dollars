import React from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const Admin = dynamic(() => import("../components/Admin"), {
  ssr: false,
});

const AdminDashboard = () => {
  return (
    <Layout>
      <Admin />
    </Layout>
  );
};

export default AdminDashboard;
