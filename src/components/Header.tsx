export default function Header() {
  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur">
      <div className="mx-5 flex max-w-screen items-center justify-between p-3">
        <div className="flex items-center gap-3 font-extrabold text-white">
          TomeNet
        </div>
        <button className="rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-5 py-2 text-white">Sign In</button>
      </div>
    </header>
  );
}
