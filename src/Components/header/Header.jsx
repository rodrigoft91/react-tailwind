import ToogleTheme from "./TooggleTheme/ToogleTheme";

const Header = () => {
  return (
    <div className="flex  justify-around py-4 dark:bg-gray-400 text sm:rounded sm:m-2 bg-slate-900">
      <span className="text-gray-100">Olá, Usuário.</span>
      <h1 className="text-gray-100">Alura NewsLetter</h1>
      <ToogleTheme />
    </div>
  );
};

export default Header;
