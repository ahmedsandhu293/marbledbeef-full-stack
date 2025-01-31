import "@/styles/globals.css";
import SideBar from "../components/nav/sideBar";

export default function DashLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen bg-background-primary">
      <SideBar />
      <div className="flex-grow">{children}</div>
    </main>
  );
}
