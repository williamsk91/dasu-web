interface Props {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
  future?: boolean;
}

export const Feature = (props: Props) => {
  const { Icon, title, future } = props;

  return (
    <div className="w-48 h-44 flex flex-col items-center text-slate-500 bg-slate-100 px-8 py-10 rounded-lg">
      <Icon className="h-10 w-10" />
      <p className="text-xl mt-2 text-center">{title}</p>
      {future && (
        <span className="border px-1 py-.5 rounded-full text-xs text-white bg-slate-500 whitespace-nowrap">
          coming soon
        </span>
      )}
    </div>
  );
};
