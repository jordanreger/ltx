export default function Header({active}) {
  const items = [
    {
      name: "ltx",
      href: "/",
    },
    {
      name: "latest",
      href: "/latest",
    },
    {
      name: "wiki",
      href: "/wiki",
    },
    {
      name: "streams",
      href: "/streams",
    },
  ];

  return (
    <header>
      <nav>
        {items.map((item) => (
          <a href={item.href} class={active == item.href && active !== "/" ? `active ${item.name}` : `${item.name}`}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}