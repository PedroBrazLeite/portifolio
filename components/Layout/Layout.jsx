import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gray-800 w-screen h-screen">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
}
