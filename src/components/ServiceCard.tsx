type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="flex h-full flex-col rounded-xl bg-slate-800/65 p-6 shadow-lg outline outline-orange-400 backdrop-blur-xl transition hover:scale-105 hover:shadow-xl"
    >
      <div className="items-center flex flex-col text-center">
        <img src={icon} alt="" className="size-16 shrink-0 mb-4" />
        <div>
          <h3 className="mb-2 text-center align-text-top font-[Aoboshi] text-lg font-bold text-black dark:text-white">
            {title}
          </h3>
          <span className="font-[Inika] text-sm text-gray-500 dark:text-gray-400">
            {description}
          </span>
        </div>
      </div>
    </a>
  );
}
