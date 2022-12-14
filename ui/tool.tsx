export type Tool = {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  category?: string;
};

export const ToolCard = ({ title, tags, description, link }: Tool) => {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <div className="flex space-x-1 mb-1">
        {tags?.map((t) => {
          return <p key={t} className="text-xs">{`#${t}`}</p>;
        })}
      </div>
      <p className="text-sm">{description}</p>
      {link != null ? (
        <a className="text-xs text-white/60 hover:text-white/80" href={link}>
          take a look
        </a>
      ) : null}
    </div>
  );
};
